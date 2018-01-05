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

my $key_groups = {
    'mail-ports' => [
	'mail' , {
	    int_port => 1,
	    ext_port => 1,
	}],
    'mail-relaying' => [
	'mail' , {
	    relay => 1,
	    relaynomx => 1,
	    relayport => 1,
	    smarthost => 1,
	}],
};

my $select_keys;

if ($single_section) {
    if (my $a =  $key_groups->{$single_section}) {
	my ($sec, $hash) = @$a;
	$single_section = $sec;
	$select_keys = $hash;
    }
}


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
	return 1 if $select_keys && !$select_keys->{$key};
	return 0;
    };
    
    print PVE::RESTHandler::dump_properties(
	$properties, 'asciidoc', 'config', $filter);
}

if (defined($single_section)) {
    die "no such section '$single_section'" if !$found;
}
 
exit(0);
