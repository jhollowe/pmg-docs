DGDIR=.
ASCIIDOC_PMG=./asciidoc-pmg

GEN_PACKAGE=pmg-doc-generator
DOC_PACKAGE=pmg-docs

# also update debian/changelog
PKGREL=7

ARCH:=$(shell dpkg-architecture -qDEB_BUILD_ARCH)

GEN_DEB=${GEN_PACKAGE}_${DOCRELEASE}-${PKGREL}_${ARCH}.deb
DOC_DEB=${DOC_PACKAGE}_${DOCRELEASE}-${PKGREL}_all.deb
DOC_BUILDDEPS := dblatex, source-highlight, inkscape, imagemagick


all: index.html

.PHONY: verify-images
verify-images: png-verify.pl
	for i in ./images/screenshot/*.png; do ./png-verify.pl $$i; done

ADOC_SOURCES_GUESS=$(filter-out %-synopsis.adoc %-opts.adoc %-table.adoc, $(wildcard *.adoc))
.pmg-doc-depends link-refs.json: ${ADOC_SOURCES_GUESS} scan-adoc-refs
	./scan-adoc-refs *.adoc --depends .pmg-doc-depends.tmp > link-refs.json.tmp
	@cmp --quiet .pmg-doc-depends .pmg-doc-depends.tmp || mv .pmg-doc-depends.tmp .pmg-doc-depends
	@cmp --quiet link-refs.json link-refs.json.tmp || mv link-refs.json.tmp link-refs.json

pmg-doc-generator.mk: .pmg-doc-depends pmg-doc-generator.mk.in
	cat pmg-doc-generator.mk.in .pmg-doc-depends > $@.tmp
	mv $@.tmp $@

include ./pmg-doc-generator.mk

GEN_DEB_SOURCES=				\
	pmg-doc-generator.mk			\
	${MANUAL_SOURCES}			\
	docinfo.xml

GEN_SCRIPTS=					\
	gen-cluster.conf.5-opts.pl		\
	gen-fetchmail.conf.5-opts.pl		\
	gen-ldap.conf.5-opts.pl			\
	gen-pmg.conf.5-opts.pl			\
	gen-user.conf.5-opts.pl

API_VIEWER_SOURCES=				\
	api-viewer/index.html			\
	api-viewer/apidoc.js

asciidoc-pmg: asciidoc-pmg.in link-refs.json
	cat asciidoc-pmg.in link-refs.json >asciidoc-pmg.tmp
	sed -e s/@RELEASE@/${DOCRELEASE}/ -i asciidoc-pmg.tmp
	chmod +x asciidoc-pmg.tmp
	mv asciidoc-pmg.tmp asciidoc-pmg

INDEX_INCLUDES=								\
	pmg-admin-guide.pdf 						\
	pmg-admin-guide.epub 						\
	chapter-index-table.adoc					\
	man1-index-table.adoc						\
	man5-index-table.adoc						\
	man8-index-table.adoc						\
	$(sort $(addsuffix .html, ${MANUAL_PAGES}) ${CHAPTER_LIST})

ADOC_STDARG=-b $(shell pwd)/asciidoc/pmg-html -f asciidoc/asciidoc-pmg.conf -a icons -a data-uri -a "date=$(shell date)" -a "revnumber=${DOCRELEASE}"

BROWSER?=xdg-open


README.html: README.adoc
	asciidoc -a toc ${ADOC_STDARG} -o $@ $<

.PHONY: index
index: index.html
	$(BROWSER) index.html &

chapter-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg chapter-table >$@.tmp
	mv $@.tmp $@

man1-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg man1page-table >$@.tmp
	mv $@.tmp $@

man5-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg man5page-table >$@.tmp
	mv $@.tmp $@

man8-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg man8page-table >$@.tmp
	mv $@.tmp $@

index.html: index.adoc ${API_VIEWER_SOURCES} ${INDEX_INCLUDES}
	asciidoc ${ADOC_STDARG} -o $@ index.adoc

pmg-admin-guide.html: ${PMG_ADMIN_GUIDE_ADOCDEPENDS}
	asciidoc -a pmglogo ${ADOC_STDARG} -o $@ pmg-admin-guide.adoc

pmg-admin-guide.chunked: ${PMG_ADMIN_GUIDE_ADOCDEPENDS}
	rm -rf pmg-admin-guide.chunked
	a2x -a docinfo -a docinfo1 -a icons -f chunked pmg-admin-guide.adoc

PMG_DOCBOOK_CONF=-b $(shell pwd)/asciidoc/pmg-docbook -f asciidoc/asciidoc-pmg.conf

pmg-admin-guide-docinfo.xml: pmg-admin-guide-docinfo.xml.in
	sed -e 's/@RELEASE@/${DOCRELEASE}/' <$< >$@

pmg-admin-guide.pdf: ${PMG_ADMIN_GUIDE_ADOCDEPENDS} docinfo.xml pmg-admin-guide-docinfo.xml
	inkscape -z -D --export-pdf=proxmox-logo.pdf images/proxmox-logo.svg
	inkscape -z -D --export-pdf=proxmox-ci-header.pdf images/proxmox-ci-header.svg
	grep ">Release ${DOCRELEASE}<" pmg-admin-guide-docinfo.xml || (echo "wrong release in  pmg-admin-guide-docinfo.xml" && false);
	a2x -a docinfo -a docinfo1 -f pdf -L --asciidoc-opts="${PMG_DOCBOOK_CONF}" --dblatex-opts "-p ./asciidoc/pmg-dblatex.xsl -s asciidoc/dblatex-custom.sty" pmg-admin-guide.adoc
	rm proxmox-logo.pdf proxmox-ci-header.pdf

pmg-admin-guide.epub: ${PMG_ADMIN_GUIDE_ADOCDEPENDS}
	a2x -f epub --asciidoc-opts="${PMG_DOCBOOK_CONF}" pmg-admin-guide.adoc

api-viewer/apidata.js: extractapi.pl
	./extractapi.pl >$@

api-viewer/apidoc.js: api-viewer/apidata.js api-viewer/PMGAPI.js
	cat api-viewer/apidata.js api-viewer/PMGAPI.js >$@

.PHONY: dinstall
dinstall: ${GEN_DEB} ${DOC_DEB}
	dpkg -i ${GEN_DEB} ${DOC_DEB}

.PHONY: deb
deb:
	rm -f ${GEN_DEB} ${DOC_DEB}
	make all-debs

.PHONY: all-debs
all-debs: ${GEN_DEB} ${DOC_DEB}

.PHONY: clean-build
clean-build:
	rm -rf build

define prepare_build
	rm -rf build-$1
	mkdir build-$1
	cp -a debian build-$1/debian
	mv build-$1/debian/control.in build-$1/debian/control
	echo >> build-$1/debian/control
	cat debian/$1.control >> build-$1/debian/control
	install -dm755 build-$1/usr/share/$1
	install -dm755 build-$1/usr/share/doc/$1
endef

.PHONY: gen-deb
gen-deb: $(GEN_DEB)
$(GEN_DEB): $(GEN_DEB_SOURCES) asciidoc-pmg
	$(call prepare_build,$(GEN_PACKAGE))
	install -dm755 build-$(GEN_PACKAGE)/usr/bin
	# install files
	install -m 0644 ${GEN_DEB_SOURCES} build-$(GEN_PACKAGE)/usr/share/${GEN_PACKAGE}
	install -m 0755 ${GEN_SCRIPTS} build-$(GEN_PACKAGE)/usr/share/${GEN_PACKAGE}
	# install asciidoc-pmg
	install -m 0755 asciidoc-pmg build-$(GEN_PACKAGE)/usr/bin/
	install -dm755 build-$(GEN_PACKAGE)/usr/share/${GEN_PACKAGE}/asciidoc/
	install -m 0644 asciidoc/asciidoc-pmg.conf build-$(GEN_PACKAGE)/usr/share/${GEN_PACKAGE}/asciidoc/
	install -m 0644 asciidoc/pmg-html.conf build-$(GEN_PACKAGE)/usr/share/${GEN_PACKAGE}/asciidoc/
	cd build-$(GEN_PACKAGE) && dpkg-buildpackage -rfakeroot -b -us -uc
	lintian ${GEN_DEB}

.PHONY: doc-deb
doc-deb: $(DOC_DEB)
$(DOC_DEB): index.html $(API_VIEWER_SOURCES) verify-images
	$(call prepare_build,$(DOC_PACKAGE))
	sed -i -e '/^Build-Depends/{s/$$/, $(DOC_BUILDDEPS)/}' build-$(DOC_PACKAGE)/debian/control
	# install files for pmgdocs package
	install -dm755 build-$(DOC_PACKAGE)/usr/share/${DOC_PACKAGE}
	install -dm755 build-$(DOC_PACKAGE)/usr/share/doc/${DOC_PACKAGE}
	install -m 0644 index.html ${INDEX_INCLUDES} build-$(DOC_PACKAGE)/usr/share/${DOC_PACKAGE}
	# install screenshot images
	install -dm755 build-$(DOC_PACKAGE)/usr/share/${DOC_PACKAGE}/images/screenshot
	install -m 0644 images/screenshot/*.png build-$(DOC_PACKAGE)/usr/share/${DOC_PACKAGE}/images/screenshot
	# install api doc viewer
	install -dm755 build-$(DOC_PACKAGE)/usr/share/${DOC_PACKAGE}/api-viewer
	install -m 0644 ${API_VIEWER_SOURCES} build-$(DOC_PACKAGE)/usr/share/${DOC_PACKAGE}/api-viewer
	cd build-$(DOC_PACKAGE) && dpkg-buildpackage -rfakeroot -b -us -uc
	lintian ${DOC_DEB}

.PHONY: upload
upload: ${GEN_DEB} ${DOC_DEB}
	tar cf - ${GEN_DEB} ${DOC_DEB} | ssh -X repoman@repo.proxmox.com -- upload --product pmg --dist stretch

.PHONY: update
update: clean
	find . -regex '.*-\(opts\|synopsis\)\.adoc' -exec rm -f \{\} \;
	rm -f api-viewer/apidata.js
	make all

clean:
	find . -name '*~' -exec rm {} ';'
	rm -rf *.html *.pdf *.epub *.tmp *.1 *.5 *.8
	rm -f *.deb *.changes *.buildinfo
	rm -f api-viewer/apidoc.js chapter-*.html *-plain.html chapter-*.html pmg-admin-guide.chunked asciidoc-pmg link-refs.json .asciidoc-pmg-tmp_* pmg-smtp-filter.8-synopsis.adoc pmgpolicy.8-synopsis.adoc pmgsh.1-synopsis.adoc
	rm -rf .pmg-doc-depends 
	rm -f pmg-doc-generator.mk chapter-index-table.adoc man1-index-table.adoc man5-index-table.adoc man8-index-table.adoc pmg-admin-guide-docinfo.xml
	rm -rf build-*
