#!/usr/bin/perl

use lib '.';
use strict;
use warnings;
use PVE::RESTHandler;

use Data::Dumper;

use PMG::Config;

my $types = PMG::Config::Base->lookup_types;

foreach my $section (@$types) {
    my $plugin = PMG::Config::Base->lookup($section);
    my $schema = $plugin->updateSchema(1);
    my $properties = $schema->{properties};
    
    print ".Section '$section'\n\n";
    
    print PVE::RESTHandler::dump_properties($properties);
}
 
exit(0);
