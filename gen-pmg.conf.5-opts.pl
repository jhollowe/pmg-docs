#!/usr/bin/perl

use lib '.';
use strict;
use warnings;
use PVE::RESTHandler;

use Data::Dumper;

use PMG::Config;

my $types = PMG::Config::Base->lookup_types;

my $single_section = shift;
my $found = 0;

foreach my $section (@$types) {
    my $plugin = PMG::Config::Base->lookup($section);
    my $schema = $plugin->updateSchema(1);
    my $properties = $schema->{properties};

    if (defined($single_section)) {
	next if $section ne $single_section;
    } else {
	print ".Section '$section'\n\n";
    }

    $found = 1;

    my $filter = sub {
	my ($key, $phash) = @_;
	return 1 if $key eq 'digest';
	return 1 if $key eq 'delete';
	return 0;
    };
    
    print PVE::RESTHandler::dump_properties(
	$properties, 'asciidoc', 'config', $filter);
}

if (defined($single_section)) {
    die "no such section '$single_section'" if !$found;
}
 
exit(0);
