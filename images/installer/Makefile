
PPMS= 			\
pmg-grub-menu		\
pmg-installation	\
pmg-select-location	\
pmg-select-target-disk	\
pmg-set-password	\
pmg-setup-network	\
pmg-summary

all: $(addsuffix .png, ${PPMS})

%.png: %.ppm
	convert $< -bordercolor black -border 10x10 $@

dist-clean:
	rm -f $(addsuffix .png, ${PPMS})

update:
	rm -f $(addsuffix .png, ${PPMS})
	$(MAKE)
