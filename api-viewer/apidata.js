var pmgapi = [
   {
      "children" : [
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "description" : "Get list of rules.",
                        "method" : "GET",
                        "name" : "list_rules",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/rules",
                  "text" : "rules"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'action' objects.",
                        "method" : "GET",
                        "name" : "list_actions",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/actions",
                  "text" : "actions"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'what' objects.",
                        "method" : "GET",
                        "name" : "list_what_object",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/what",
                  "text" : "what"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'when' objects.",
                        "method" : "GET",
                        "name" : "list_when_object",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/when",
                  "text" : "when"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'who' objects.",
                        "method" : "GET",
                        "name" : "list_who_object",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/who",
                  "text" : "who"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Directory index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {},
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/ruledb",
            "text" : "ruledb"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete an LDAP server entry.",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "section" : {
                                 "description" : "Secion ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "Get LDAP server configuration.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "section" : {
                                 "description" : "Secion ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {}
                     },
                     "PUT" : {
                        "description" : "Update LDAP server settings.",
                        "method" : "PUT",
                        "name" : "update",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "accountattr" : {
                                 "default" : "sAMAccountName",
                                 "description" : "Account attribute name name.",
                                 "optional" : 1,
                                 "pattern" : "[a-zA-Z0-9]+",
                                 "type" : "string"
                              },
                              "basedn" : {
                                 "description" : "Base domain name.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "binddn" : {
                                 "description" : "Bind domain name.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "bindpw" : {
                                 "description" : "Bind password.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "delete" : {
                                 "description" : "A list of settings you want to delete.",
                                 "format" : "pve-configid-list",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "filter" : {
                                 "description" : "LDAP filter.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "groupbasedn" : {
                                 "description" : "Base domain name for groups.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "mailattr" : {
                                 "default" : "mail, userPrincipalName, proxyAddresses, othermailbox",
                                 "description" : "List of mail attribute names.",
                                 "format" : "string-list",
                                 "optional" : 1,
                                 "pattern" : "[a-zA-Z0-9]+",
                                 "type" : "string"
                              },
                              "mode" : {
                                 "default" : "ldap",
                                 "description" : "LDAP protocol mode ('ldap' or 'ldaps').",
                                 "enum" : [
                                    "ldap",
                                    "ldaps"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "port" : {
                                 "description" : "Specify the port to connect to.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 65535)"
                              },
                              "section" : {
                                 "description" : "Secion ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "server1" : {
                                 "description" : "Server address.",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "server2" : {
                                 "description" : "Fallback server address. Userd when the first server is not available.",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           },
                           "type" : "object"
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ldap/{section}",
                  "text" : "{section}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "LDAP server list.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mode" : {
                              "type" : "string"
                           },
                           "section" : {
                              "type" : "string"
                           },
                           "server1" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{section}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add LDAP server.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "accountattr" : {
                           "default" : "sAMAccountName",
                           "description" : "Account attribute name name.",
                           "optional" : 1,
                           "pattern" : "[a-zA-Z0-9]+",
                           "type" : "string"
                        },
                        "basedn" : {
                           "description" : "Base domain name.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "binddn" : {
                           "description" : "Bind domain name.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "bindpw" : {
                           "description" : "Bind password.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "filter" : {
                           "description" : "LDAP filter.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "groupbasedn" : {
                           "description" : "Base domain name for groups.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "mailattr" : {
                           "default" : "mail, userPrincipalName, proxyAddresses, othermailbox",
                           "description" : "List of mail attribute names.",
                           "format" : "string-list",
                           "optional" : 1,
                           "pattern" : "[a-zA-Z0-9]+",
                           "type" : "string"
                        },
                        "mode" : {
                           "default" : "ldap",
                           "description" : "LDAP protocol mode ('ldap' or 'ldaps').",
                           "enum" : [
                              "ldap",
                              "ldaps"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "port" : {
                           "description" : "Specify the port to connect to.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "section" : {
                           "description" : "Secion ID.",
                           "format" : "pve-configid",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server1" : {
                           "description" : "Server address.",
                           "format" : "address",
                           "optional" : 0,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server2" : {
                           "description" : "Fallback server address. Userd when the first server is not available.",
                           "format" : "address",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     },
                     "type" : "object"
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/ldap",
            "text" : "ldap"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete a relay domain",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/domains/{domain}",
                  "text" : "{domain}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "List relay domains.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "domain" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{section}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add relay domain.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "domain" : {
                           "description" : "Domain name.",
                           "format" : "dns-name",
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/domains",
            "text" : "domains"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Cluster node index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "cid" : {
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{cid}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/cluster",
            "text" : "cluster"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Read admin configuration properties.",
                  "method" : "GET",
                  "name" : "read_admin_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "description" : "Update admin configuration properties.",
                  "method" : "PUT",
                  "name" : "update_admin_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "dailyreport" : {
                           "default" : 1,
                           "description" : "Send daily reports.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "demo" : {
                           "default" : 0,
                           "description" : "Demo mode - do not start SMTP filter.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "proxypassword" : {
                           "description" : "HTTP proxy password.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "proxyport" : {
                           "default" : 8080,
                           "description" : "HTTP proxy port.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "proxyserver" : {
                           "description" : "HTTP proxy server address.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "proxyuser" : {
                           "description" : "HTTP proxy user name.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     },
                     "type" : "object"
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/admin",
            "text" : "admin"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Read clamav configuration properties.",
                  "method" : "GET",
                  "name" : "read_clamav_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "description" : "Update clamav configuration properties.",
                  "method" : "PUT",
                  "name" : "update_clamav_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "archiveblockencrypted" : {
                           "default" : 0,
                           "description" : "Wether to block encrypted archives. Mark encrypted archives as viruses.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "archivemaxfiles" : {
                           "default" : 1000,
                           "description" : "Number of files to be scanned within an archive, a document, or any other kind of container. Warning: disabling this limit or setting it too high may result in severe damage to the system.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "archivemaxrec" : {
                           "default" : 5,
                           "description" : "Nested archives are scanned recursively, e.g. if a ZIP archive contains a TAR  file,  all files within it will also be scanned. This options specifies how deeply the process should be continued. Warning: setting this limit too high may result in severe damage to the system.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "archivemaxsize" : {
                           "default" : 25000000,
                           "description" : "Files larger than this limit won't be scanned.",
                           "minimum" : 1000000,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1000000 - N)"
                        },
                        "dbmirror" : {
                           "default" : "database.clamav.net",
                           "description" : "ClamAV database mirror server.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "maxcccount" : {
                           "default" : 0,
                           "description" : "This option sets the lowest number of Credit Card or Social Security numbers found in a file to generate a detect.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "maxscansize" : {
                           "default" : 100000000,
                           "description" : "Sets the maximum amount of data to be scanned for each input file.",
                           "minimum" : 1000000,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1000000 - N)"
                        }
                     },
                     "type" : "object"
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/clamav",
            "text" : "clamav"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Read mail configuration properties.",
                  "method" : "GET",
                  "name" : "read_mail_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "description" : "Update mail configuration properties.",
                  "method" : "PUT",
                  "name" : "update_mail_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "banner" : {
                           "default" : "ESMTP Proxmox",
                           "description" : "ESMTP banner.",
                           "maxLength" : 1024,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "conn_count_limit" : {
                           "default" : 50,
                           "description" : "How many simultaneous connections any client is allowed to make to this service. To disable this feature, specify a limit of 0.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "conn_rate_limit" : {
                           "default" : 0,
                           "description" : "The maximal number of connection attempts any client is allowed to make to this service per minute. To disable this feature, specify a limit of 0.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "dnsbl_sites" : {
                           "description" : "Optional list of DNS white/blacklist domains (see postscreen_dnsbl_sites parameter).",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "dwarning" : {
                           "default" : 4,
                           "description" : "SMTP delay warning time (in hours).",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "greylist" : {
                           "default" : 1,
                           "description" : "Use Greylisting.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "helotests" : {
                           "default" : 0,
                           "description" : "Use SMTP HELO tests.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "hide_received" : {
                           "default" : 0,
                           "description" : "Hide received header in outgoing mails.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "max_filters" : {
                           "default" : 15,
                           "description" : "Maximum number of pmg-smtp-filter processes.",
                           "maximum" : 40,
                           "minimum" : 3,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3 - 40)"
                        },
                        "max_policy" : {
                           "default" : 5,
                           "description" : "Maximum number of pmgpolicy processes.",
                           "maximum" : 10,
                           "minimum" : 2,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (2 - 10)"
                        },
                        "max_smtpd_in" : {
                           "default" : 99,
                           "description" : "Maximum number of SMTP daemon processes (in).",
                           "maximum" : 100,
                           "minimum" : 3,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3 - 100)"
                        },
                        "max_smtpd_out" : {
                           "default" : 99,
                           "description" : "Maximum number of SMTP daemon processes (out).",
                           "maximum" : 100,
                           "minimum" : 3,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3 - 100)"
                        },
                        "maxsize" : {
                           "default" : 10485760,
                           "description" : "Maximum email size. Larger mails are rejected.",
                           "minimum" : 1024,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1024 - N)"
                        },
                        "message_rate_limit" : {
                           "default" : 0,
                           "description" : "The maximal number of message delivery requests that any client is allowed to make to this service per minute.To disable this feature, specify a limit of 0.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "rejectunknown" : {
                           "default" : 0,
                           "description" : "Reject unknown clients.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "rejectunknownsender" : {
                           "default" : 0,
                           "description" : "Reject unknown senders.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "relay" : {
                           "description" : "The default mail delivery transport (incoming mails).",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "relaynomx" : {
                           "default" : 0,
                           "description" : "Disable MX lookups for default relay.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "relayport" : {
                           "default" : 25,
                           "description" : "SMTP port number for relay host.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "spf" : {
                           "default" : 1,
                           "description" : "Use Sender Policy Framework.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "tls" : {
                           "default" : 0,
                           "description" : "Use TLS.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_rbl" : {
                           "default" : 1,
                           "description" : "Use Realtime Blacklists.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "verifyreceivers" : {
                           "default" : 0,
                           "description" : "Enable receiver verification. The value (if greater than 0) spefifies the numerical reply code when the Postfix SMTP server rejects a recipient address (450 or 550).",
                           "maximum" : 599,
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - 599)"
                        }
                     },
                     "type" : "object"
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/mail",
            "text" : "mail"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Read spam configuration properties.",
                  "method" : "GET",
                  "name" : "read_spam_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "description" : "Update spam configuration properties.",
                  "method" : "PUT",
                  "name" : "update_spam_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "bounce_score" : {
                           "default" : 0,
                           "description" : "Additional score for bounce mails.",
                           "maximum" : 1000,
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - 1000)"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "languages" : {
                           "default" : "all",
                           "description" : "This option is used to specify which languages are considered OK for incoming mail.",
                           "optional" : 1,
                           "pattern" : "(all|([a-z][a-z])+( ([a-z][a-z])+)*)",
                           "type" : "string"
                        },
                        "maxspamsize" : {
                           "default" : 204800,
                           "description" : "Maximum size of spam messages in bytes.",
                           "minimum" : 64,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (64 - N)"
                        },
                        "rbl_checks" : {
                           "default" : 1,
                           "description" : "Enable real time blacklists (RBL) checks.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_awl" : {
                           "default" : 1,
                           "description" : "Use the Auto-Whitelist plugin.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_bayes" : {
                           "default" : 1,
                           "description" : "Whether to use the naive-Bayesian-style classifier.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_ocr" : {
                           "default" : 0,
                           "description" : "Enable OCR to scan pictures.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_razor" : {
                           "default" : 1,
                           "description" : "Whether to use Razor2, if it is available.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "wl_bounce_relays" : {
                           "description" : "Whitelist legitimate bounce relays.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     },
                     "type" : "object"
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/spam",
            "text" : "spam"
         }
      ],
      "info" : {
         "GET" : {
            "description" : "Directory index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "returns" : {
               "items" : {
                  "properties" : {
                     "section" : {
                        "type" : "string"
                     }
                  },
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{section}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/config",
      "text" : "config"
   },
   {
      "children" : [
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete network device configuration",
                              "method" : "DELETE",
                              "name" : "delete_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "iface" : {
                                       "description" : "Network interface name.",
                                       "format" : "pve-iface",
                                       "maxLength" : 20,
                                       "minLength" : 2,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Read network device configuration",
                              "method" : "GET",
                              "name" : "network_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "iface" : {
                                       "description" : "Network interface name.",
                                       "format" : "pve-iface",
                                       "maxLength" : 20,
                                       "minLength" : 2,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "properties" : {
                                    "method" : {
                                       "type" : "string"
                                    },
                                    "type" : {
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update network device configuration",
                              "method" : "PUT",
                              "name" : "update_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "address" : {
                                       "description" : "IP address.",
                                       "format" : "ipv4",
                                       "optional" : 1,
                                       "requires" : "netmask",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "address6" : {
                                       "description" : "IP address.",
                                       "format" : "ipv6",
                                       "optional" : 1,
                                       "requires" : "netmask6",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "autostart" : {
                                       "description" : "Automatically start interface on boot.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "bond_mode" : {
                                       "description" : "Bonding mode.",
                                       "enum" : [
                                          "balance-rr",
                                          "active-backup",
                                          "balance-xor",
                                          "broadcast",
                                          "802.3ad",
                                          "balance-tlb",
                                          "balance-alb",
                                          "balance-slb",
                                          "lacp-balance-slb",
                                          "lacp-balance-tcp"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "bond_xmit_hash_policy" : {
                                       "description" : "Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes.",
                                       "enum" : [
                                          "layer2",
                                          "layer2+3",
                                          "layer3+4"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "bridge_ports" : {
                                       "description" : "Specify the iterfaces you want to add to your bridge.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "bridge_vlan_aware" : {
                                       "description" : "Enable bridge vlan support.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "comments" : {
                                       "description" : "Comments",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "comments6" : {
                                       "description" : "Comments",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "delete" : {
                                       "description" : "A list of settings you want to delete.",
                                       "format" : "pve-configid-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "gateway" : {
                                       "description" : "Default gateway address.",
                                       "format" : "ipv4",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "gateway6" : {
                                       "description" : "Default ipv6 gateway address.",
                                       "format" : "ipv6",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "iface" : {
                                       "description" : "Network interface name.",
                                       "format" : "pve-iface",
                                       "maxLength" : 20,
                                       "minLength" : 2,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "netmask" : {
                                       "description" : "Network mask.",
                                       "format" : "ipv4mask",
                                       "optional" : 1,
                                       "requires" : "address",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "netmask6" : {
                                       "description" : "Network mask.",
                                       "maximum" : 128,
                                       "minimum" : 0,
                                       "optional" : 1,
                                       "requires" : "address6",
                                       "type" : "integer",
                                       "typetext" : "<integer> (0 - 128)"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_bonds" : {
                                       "description" : "Specify the interfaces used by the bonding device.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_bridge" : {
                                       "description" : "The OVS bridge associated with a OVS port. This is required when you create an OVS port.",
                                       "format" : "pve-iface",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_options" : {
                                       "description" : "OVS interface options.",
                                       "maxLength" : 1024,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_ports" : {
                                       "description" : "Specify the iterfaces you want to add to your bridge.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_tag" : {
                                       "description" : "Specify a VLan tag (used by OVSPort, OVSIntPort, OVSBond)",
                                       "maximum" : 4094,
                                       "minimum" : 1,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1 - 4094)"
                                    },
                                    "slaves" : {
                                       "description" : "Specify the interfaces used by the bonding device.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "type" : {
                                       "description" : "Network interface type",
                                       "enum" : [
                                          "bridge",
                                          "bond",
                                          "eth",
                                          "alias",
                                          "vlan",
                                          "OVSBridge",
                                          "OVSBond",
                                          "OVSPort",
                                          "OVSIntPort",
                                          "unknown"
                                       ],
                                       "type" : "string"
                                    }
                                 }
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/network/{iface}",
                        "text" : "{iface}"
                     }
                  ],
                  "info" : {
                     "DELETE" : {
                        "description" : "Revert network configuration changes.",
                        "method" : "DELETE",
                        "name" : "revert_network_changes",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "List available networks",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "type" : {
                                 "description" : "Only list specific interface types.",
                                 "enum" : [
                                    "bridge",
                                    "bond",
                                    "eth",
                                    "alias",
                                    "vlan",
                                    "OVSBridge",
                                    "OVSBond",
                                    "OVSPort",
                                    "OVSIntPort",
                                    "any_bridge"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           }
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{iface}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Create network device configuration",
                        "method" : "POST",
                        "name" : "create_network",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "address" : {
                                 "description" : "IP address.",
                                 "format" : "ipv4",
                                 "optional" : 1,
                                 "requires" : "netmask",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "address6" : {
                                 "description" : "IP address.",
                                 "format" : "ipv6",
                                 "optional" : 1,
                                 "requires" : "netmask6",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "autostart" : {
                                 "description" : "Automatically start interface on boot.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "bond_mode" : {
                                 "description" : "Bonding mode.",
                                 "enum" : [
                                    "balance-rr",
                                    "active-backup",
                                    "balance-xor",
                                    "broadcast",
                                    "802.3ad",
                                    "balance-tlb",
                                    "balance-alb",
                                    "balance-slb",
                                    "lacp-balance-slb",
                                    "lacp-balance-tcp"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "bond_xmit_hash_policy" : {
                                 "description" : "Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes.",
                                 "enum" : [
                                    "layer2",
                                    "layer2+3",
                                    "layer3+4"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "bridge_ports" : {
                                 "description" : "Specify the iterfaces you want to add to your bridge.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "bridge_vlan_aware" : {
                                 "description" : "Enable bridge vlan support.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "comments" : {
                                 "description" : "Comments",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "comments6" : {
                                 "description" : "Comments",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "gateway" : {
                                 "description" : "Default gateway address.",
                                 "format" : "ipv4",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "gateway6" : {
                                 "description" : "Default ipv6 gateway address.",
                                 "format" : "ipv6",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "iface" : {
                                 "description" : "Network interface name.",
                                 "format" : "pve-iface",
                                 "maxLength" : 20,
                                 "minLength" : 2,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "netmask" : {
                                 "description" : "Network mask.",
                                 "format" : "ipv4mask",
                                 "optional" : 1,
                                 "requires" : "address",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "netmask6" : {
                                 "description" : "Network mask.",
                                 "maximum" : 128,
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "requires" : "address6",
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 128)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_bonds" : {
                                 "description" : "Specify the interfaces used by the bonding device.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_bridge" : {
                                 "description" : "The OVS bridge associated with a OVS port. This is required when you create an OVS port.",
                                 "format" : "pve-iface",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_options" : {
                                 "description" : "OVS interface options.",
                                 "maxLength" : 1024,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_ports" : {
                                 "description" : "Specify the iterfaces you want to add to your bridge.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_tag" : {
                                 "description" : "Specify a VLan tag (used by OVSPort, OVSIntPort, OVSBond)",
                                 "maximum" : 4094,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 4094)"
                              },
                              "slaves" : {
                                 "description" : "Specify the interfaces used by the bonding device.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "type" : {
                                 "description" : "Network interface type",
                                 "enum" : [
                                    "bridge",
                                    "bond",
                                    "eth",
                                    "alias",
                                    "vlan",
                                    "OVSBridge",
                                    "OVSBond",
                                    "OVSPort",
                                    "OVSIntPort",
                                    "unknown"
                                 ],
                                 "type" : "string"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/network",
                  "text" : "network"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read task log.",
                                    "method" : "GET",
                                    "name" : "read_task_log",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "limit" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "start" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          },
                                          "upid" : {
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "n" : {
                                                "description" : "Line number",
                                                "type" : "integer"
                                             },
                                             "t" : {
                                                "description" : "Line text",
                                                "type" : "string"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/tasks/{upid}/log",
                              "text" : "log"
                           },
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read task status.",
                                    "method" : "GET",
                                    "name" : "read_task_status",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "upid" : {
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "properties" : {
                                          "pid" : {
                                             "type" : "integer"
                                          },
                                          "status" : {
                                             "enum" : [
                                                "running",
                                                "stopped"
                                             ],
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/tasks/{upid}/status",
                              "text" : "status"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "description" : "Stop a task.",
                              "method" : "DELETE",
                              "name" : "stop_task",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "upid" : {
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "",
                              "method" : "GET",
                              "name" : "upid_index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "upid" : {
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{name}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/tasks/{upid}",
                        "text" : "{upid}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Read task list for one node (finished tasks).",
                        "method" : "GET",
                        "name" : "node_tasks",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "errors" : {
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "limit" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "start" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "userfilter" : {
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "upid" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{upid}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/tasks",
                  "text" : "tasks"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read service properties",
                                    "method" : "GET",
                                    "name" : "service_state",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmg-smtp-filter",
                                                "sshd",
                                                "syslog",
                                                "cron",
                                                "postfix",
                                                "systemd-timesyncd"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "properties" : {},
                                       "type" : "object"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/state",
                              "text" : "state"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "description" : "Start service.",
                                    "method" : "POST",
                                    "name" : "service_start",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmg-smtp-filter",
                                                "sshd",
                                                "syslog",
                                                "cron",
                                                "postfix",
                                                "systemd-timesyncd"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/start",
                              "text" : "start"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "description" : "Stop service.",
                                    "method" : "POST",
                                    "name" : "service_stop",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmg-smtp-filter",
                                                "sshd",
                                                "syslog",
                                                "cron",
                                                "postfix",
                                                "systemd-timesyncd"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/stop",
                              "text" : "stop"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "description" : "Restart service.",
                                    "method" : "POST",
                                    "name" : "service_restart",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmg-smtp-filter",
                                                "sshd",
                                                "syslog",
                                                "cron",
                                                "postfix",
                                                "systemd-timesyncd"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/restart",
                              "text" : "restart"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "description" : "Reload service.",
                                    "method" : "POST",
                                    "name" : "service_reload",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmg-smtp-filter",
                                                "sshd",
                                                "syslog",
                                                "cron",
                                                "postfix",
                                                "systemd-timesyncd"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/reload",
                              "text" : "reload"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "description" : "Directory index",
                              "method" : "GET",
                              "name" : "srvcmdidx",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "service" : {
                                       "description" : "Service ID",
                                       "enum" : [
                                          "pmgproxy",
                                          "pmgdaemon",
                                          "pmg-smtp-filter",
                                          "sshd",
                                          "syslog",
                                          "cron",
                                          "postfix",
                                          "systemd-timesyncd"
                                       ],
                                       "type" : "string"
                                    }
                                 }
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "subdir" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{subdir}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/services/{service}",
                        "text" : "{service}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Service list.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{service}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/services",
                  "text" : "services"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Read system log",
                        "method" : "GET",
                        "name" : "syslog",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "limit" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "since" : {
                                 "description" : "Display all log since this date-time string.",
                                 "optional" : 1,
                                 "pattern" : "^\\d{4}-\\d{2}-\\d{2}( \\d{2}:\\d{2}(:\\d{2})?)?$",
                                 "type" : "string"
                              },
                              "start" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "until" : {
                                 "description" : "Display all log until this date-time string.",
                                 "optional" : 1,
                                 "pattern" : "^\\d{4}-\\d{2}-\\d{2}( \\d{2}:\\d{2}(:\\d{2})?)?$",
                                 "type" : "string"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "n" : {
                                    "description" : "Line number",
                                    "type" : "integer"
                                 },
                                 "t" : {
                                    "description" : "Line text",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/syslog",
                  "text" : "syslog"
               },
               {
                  "info" : {
                     "POST" : {
                        "description" : "Creates a VNC Shell proxy.",
                        "method" : "POST",
                        "name" : "vncshell",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "websocket" : {
                                 "default" : 1,
                                 "description" : "use websocket instead of standard vnc.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "protected" : 1,
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "port" : {
                                 "type" : "integer"
                              },
                              "ticket" : {
                                 "type" : "string"
                              },
                              "upid" : {
                                 "type" : "string"
                              },
                              "user" : {
                                 "type" : "string"
                              }
                           }
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/vncshell",
                  "text" : "vncshell"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Opens a weksocket for VNC traffic.",
                        "method" : "GET",
                        "name" : "vncwebsocket",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "port" : {
                                 "description" : "Port number returned by previous vncproxy call.",
                                 "maximum" : 5999,
                                 "minimum" : 5900,
                                 "type" : "integer",
                                 "typetext" : "<integer> (5900 - 5999)"
                              },
                              "vncticket" : {
                                 "description" : "Ticket from previous call to vncproxy.",
                                 "maxLength" : 512,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "returns" : {
                           "properties" : {
                              "port" : {
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/vncwebsocket",
                  "text" : "vncwebsocket"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Read DNS settings.",
                        "method" : "GET",
                        "name" : "dns",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "dns1" : {
                                 "description" : "First name server IP address.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "dns2" : {
                                 "description" : "Second name server IP address.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "dns3" : {
                                 "description" : "Third name server IP address.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "search" : {
                                 "description" : "Search domain for host-name lookup.",
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Write DNS settings.",
                        "method" : "PUT",
                        "name" : "update_dns",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "dns1" : {
                                 "description" : "First name server IP address.",
                                 "format" : "ip",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "dns2" : {
                                 "description" : "Second name server IP address.",
                                 "format" : "ip",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "dns3" : {
                                 "description" : "Third name server IP address.",
                                 "format" : "ip",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "search" : {
                                 "description" : "Search domain for host-name lookup.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/dns",
                  "text" : "dns"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Read server time and time zone settings.",
                        "method" : "GET",
                        "name" : "time",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "localtime" : {
                                 "description" : "Seconds since 1970-01-01 00:00:00 (local time)",
                                 "minimum" : 1297163644,
                                 "type" : "integer"
                              },
                              "time" : {
                                 "description" : "Seconds since 1970-01-01 00:00:00 UTC.",
                                 "minimum" : 1297163644,
                                 "type" : "integer"
                              },
                              "timezone" : {
                                 "description" : "Time zone",
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Set time zone.",
                        "method" : "PUT",
                        "name" : "set_timezone",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "timezone" : {
                                 "description" : "Time zone. The file '/usr/share/zoneinfo/zone.tab' contains the list of valid names.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/time",
                  "text" : "time"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Node index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "node" : {
                           "description" : "The cluster node name.",
                           "format" : "pve-node",
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "user" : "all"
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {},
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/nodes/{node}",
            "text" : "{node}"
         }
      ],
      "info" : {
         "GET" : {
            "description" : "Cluster node index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "items" : {
                  "properties" : {},
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{node}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/nodes",
      "text" : "nodes"
   },
   {
      "children" : [
         {
            "info" : {
               "GET" : {
                  "description" : "Dummy. Useful for formaters which want to priovde a login page.",
                  "method" : "GET",
                  "name" : "get_ticket",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "user" : "world"
                  },
                  "returns" : {
                     "type" : "null"
                  }
               },
               "POST" : {
                  "description" : "Create or verify authentication ticket.",
                  "method" : "POST",
                  "name" : "create_ticket",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "otp" : {
                           "description" : "One-time password for Two-factor authentication.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "password" : {
                           "description" : "The secret password. This can also be a valid ticket.",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "realm" : {
                           "description" : "You can optionally pass the realm using this parameter. Normally the realm is simply added to the username <username>@<relam>.",
                           "format" : "pmg-realm",
                           "maxLength" : 32,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "username" : {
                           "description" : "User name",
                           "maxLength" : 64,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "description" : "You need to pass valid credientials.",
                     "user" : "world"
                  },
                  "protected" : 1,
                  "returns" : {
                     "properties" : {
                        "CSRFPreventionToken" : {
                           "optional" : 1,
                           "type" : "string"
                        },
                        "ticket" : {
                           "optional" : 1,
                           "type" : "string"
                        },
                        "username" : {
                           "type" : "string"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/access/ticket",
            "text" : "ticket"
         },
         {
            "info" : {
               "PUT" : {
                  "description" : "Change user password.",
                  "method" : "PUT",
                  "name" : "change_passsword",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "password" : {
                           "description" : "The new password.",
                           "maxLength" : 64,
                           "minLength" : 5,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "userid" : {
                           "description" : "User ID",
                           "format" : "pmg-userid",
                           "maxLength" : 64,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/access/password",
            "text" : "password"
         }
      ],
      "info" : {
         "GET" : {
            "description" : "Directory index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "items" : {
                  "properties" : {
                     "subdir" : {
                        "type" : "string"
                     }
                  },
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{subdir}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/access",
      "text" : "access"
   },
   {
      "info" : {
         "GET" : {
            "description" : "API version details.",
            "method" : "GET",
            "name" : "version",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "properties" : {
                  "release" : {
                     "type" : "string"
                  },
                  "repoid" : {
                     "type" : "string"
                  },
                  "version" : {
                     "type" : "string"
                  }
               },
               "type" : "object"
            }
         }
      },
      "leaf" : 1,
      "path" : "/version",
      "text" : "version"
   }
]
;

