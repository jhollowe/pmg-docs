var pmgapi = [
   {
      "children" : [
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "description" : "Returns the rule database digest. This is used internally for cluster synchronization.",
                        "method" : "GET",
                        "name" : "ruledb_digest",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/digest",
                  "text" : "digest"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Get common rule properties.",
                                    "method" : "GET",
                                    "name" : "config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "active" : {
                                             "type" : "boolean"
                                          },
                                          "direction" : {
                                             "type" : "integer"
                                          },
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          },
                                          "priority" : {
                                             "type" : "integer"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Set rule properties.",
                                    "method" : "PUT",
                                    "name" : "update_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "active" : {
                                             "description" : "Flag to activate rule.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "direction" : {
                                             "description" : "Rule direction. Value `0` matches incomming mails, value `1` matches outgoing mails, and value `2` matches both directions.",
                                             "maximum" : 2,
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - 2)"
                                          },
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "name" : {
                                             "description" : "Rule name",
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "priority" : {
                                             "description" : "Rule priotity.",
                                             "maximum" : 100,
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - 100)"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/rules/{id}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Delete group from 'from' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_from_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/from/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'from' group list.",
                                    "method" : "GET",
                                    "name" : "from",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "description" : "Add  group to 'from' list.",
                                    "method" : "POST",
                                    "name" : "add_from_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/from",
                              "text" : "from"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Delete group from 'to' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_to_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/to/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'to' group list.",
                                    "method" : "GET",
                                    "name" : "to",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "description" : "Add  group to 'to' list.",
                                    "method" : "POST",
                                    "name" : "add_to_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/to",
                              "text" : "to"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Delete group from 'when' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_when_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/when/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'when' group list.",
                                    "method" : "GET",
                                    "name" : "when",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "description" : "Add  group to 'when' list.",
                                    "method" : "POST",
                                    "name" : "add_when_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/when",
                              "text" : "when"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Delete group from 'what' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_what_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/what/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'what' group list.",
                                    "method" : "GET",
                                    "name" : "what",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "description" : "Add  group to 'what' list.",
                                    "method" : "POST",
                                    "name" : "add_what_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/what",
                              "text" : "what"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Delete group from 'action' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_action_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/action/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'action' group list.",
                                    "method" : "GET",
                                    "name" : "action",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "description" : "Add  group to 'action' list.",
                                    "method" : "POST",
                                    "name" : "add_action_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/action",
                              "text" : "action"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete rule.",
                              "method" : "DELETE",
                              "name" : "delete_rule",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Rule ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Rule ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "path" : "/config/ruledb/rules/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Get list of rules.",
                        "method" : "GET",
                        "name" : "list_rules",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Create new rule.",
                        "method" : "POST",
                        "name" : "create_rule",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "active" : {
                                 "description" : "Flag to activate rule.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "direction" : {
                                 "description" : "Rule direction. Value `0` matches incomming mails, value `1` matches outgoing mails, and value `2` matches both directions.",
                                 "maximum" : 2,
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 2)"
                              },
                              "name" : {
                                 "description" : "Rule name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "priority" : {
                                 "description" : "Rule priotity.",
                                 "maximum" : 100,
                                 "minimum" : 0,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 100)"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/rules",
                  "text" : "rules"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "DELETE" : {
                                    "description" : "Delete 'actions' object.",
                                    "method" : "DELETE",
                                    "name" : "delete_action",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/objects/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "description" : "List 'actions' objects.",
                              "method" : "GET",
                              "name" : "list_actions",
                              "parameters" : {
                                 "additionalProperties" : 0
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "id" : {
                                          "description" : "Action Object ID.",
                                          "pattern" : "\\d+_\\d+",
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{id}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/objects",
                        "text" : "objects"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read 'BCC' object settings.",
                                    "method" : "GET",
                                    "name" : "read_bcc",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Update 'BCC' object.",
                                    "method" : "PUT",
                                    "name" : "update_bcc",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "original" : {
                                             "default" : 1,
                                             "description" : "Send the original, unmodified mail.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "target" : {
                                             "description" : "Send a Blind Carbon Copy to this email address.",
                                             "format" : "email",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/bcc/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "description" : "Create 'BCC' object.",
                              "method" : "POST",
                              "name" : "bcc",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "original" : {
                                       "default" : 1,
                                       "description" : "Send the original, unmodified mail.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "target" : {
                                       "description" : "Send a Blind Carbon Copy to this email address.",
                                       "format" : "email",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/bcc",
                        "text" : "bcc"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read 'Header Attribute' object settings.",
                                    "method" : "GET",
                                    "name" : "read_field",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Update 'Header Attribute' object.",
                                    "method" : "PUT",
                                    "name" : "update_field",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "field" : {
                                             "description" : "The Field",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "value" : {
                                             "description" : "The Value",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/field/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "description" : "Create 'Header Attribute' object.",
                              "method" : "POST",
                              "name" : "field",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "field" : {
                                       "description" : "The Field",
                                       "maxLength" : 1024,
                                       "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                       "type" : "string"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "value" : {
                                       "description" : "The Value",
                                       "maxLength" : 1024,
                                       "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                       "type" : "string"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/field",
                        "text" : "field"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read 'Notification' object settings.",
                                    "method" : "GET",
                                    "name" : "read_notification",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Update 'Notification' object.",
                                    "method" : "PUT",
                                    "name" : "update_notification",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "attach" : {
                                             "default" : 0,
                                             "description" : "Attach original E-Mail",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "body" : {
                                             "description" : "The Notification Body",
                                             "maxLength" : 2048,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "subject" : {
                                             "description" : "The Notification subject",
                                             "maxLength" : 100,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "to" : {
                                             "description" : "The Receiver E-Mail address",
                                             "maxLength" : 200,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/notification/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "description" : "Create 'Notification' object.",
                              "method" : "POST",
                              "name" : "notification",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "attach" : {
                                       "default" : 0,
                                       "description" : "Attach original E-Mail",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "body" : {
                                       "description" : "The Notification Body",
                                       "maxLength" : 2048,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "subject" : {
                                       "description" : "The Notification subject",
                                       "maxLength" : 100,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "to" : {
                                       "description" : "The Receiver E-Mail address",
                                       "maxLength" : 200,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/notification",
                        "text" : "notification"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read 'Disclaimer' object settings.",
                                    "method" : "GET",
                                    "name" : "read_disclaimer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Update 'Disclaimer' object.",
                                    "method" : "PUT",
                                    "name" : "update_disclaimer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "disclaimer" : {
                                             "description" : "The Disclaimer",
                                             "maxLength" : 2048,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/disclaimer/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "description" : "Create 'Disclaimer' object.",
                              "method" : "POST",
                              "name" : "disclaimer",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "disclaimer" : {
                                       "description" : "The Disclaimer",
                                       "maxLength" : 2048,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/disclaimer",
                        "text" : "disclaimer"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Read 'Remove attachments' object settings.",
                                    "method" : "GET",
                                    "name" : "read_removeattachments",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Update 'Remove attachments' object.",
                                    "method" : "PUT",
                                    "name" : "update_removeattachments",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "all" : {
                                             "description" : "Remove all attachments",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "text" : {
                                             "description" : "The replacement text.",
                                             "maxLength" : 2048,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/removeattachments/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "description" : "Create 'Remove attachments' object.",
                              "method" : "POST",
                              "name" : "removeattachments",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "all" : {
                                       "description" : "Remove all attachments",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "text" : {
                                       "description" : "The replacement text.",
                                       "maxLength" : 2048,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/removeattachments",
                        "text" : "removeattachments"
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
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
                  "path" : "/config/ruledb/action",
                  "text" : "action"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'what' group properties",
                                    "method" : "GET",
                                    "name" : "get_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "info" : {
                                             "type" : "string"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Modify 'what' group properties",
                                    "method" : "PUT",
                                    "name" : "set_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Group name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/what/{ogroup}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Remove an object from the 'what' group.",
                                          "method" : "DELETE",
                                          "name" : "delete_object",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Group ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/objects/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "List 'what' group objects.",
                                    "method" : "GET",
                                    "name" : "objects",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/objects",
                              "text" : "objects"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'ContentType Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_contenttype",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'ContentType Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_contenttype",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "contenttype" : {
                                                   "description" : "Content Type",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/what/{ogroup}/contenttype/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'ContentType Filter' object.",
                                    "method" : "POST",
                                    "name" : "contenttype",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "contenttype" : {
                                             "description" : "Content Type",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/contenttype",
                              "text" : "contenttype"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Match Field' object settings.",
                                          "method" : "GET",
                                          "name" : "read_matchfield",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Match Field' object.",
                                          "method" : "PUT",
                                          "name" : "update_matchfield",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "field" : {
                                                   "description" : "The Field",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "value" : {
                                                   "description" : "The Value",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
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
                                    "path" : "/config/ruledb/what/{ogroup}/matchfield/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Match Field' object.",
                                    "method" : "POST",
                                    "name" : "matchfield",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "field" : {
                                             "description" : "The Field",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "value" : {
                                             "description" : "The Value",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/matchfield",
                              "text" : "matchfield"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Spam Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_spamfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Spam Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_spamfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "spamlevel" : {
                                                   "description" : "Spam Level",
                                                   "minimum" : 0,
                                                   "type" : "integer",
                                                   "typetext" : "<integer> (0 - N)"
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
                                    "path" : "/config/ruledb/what/{ogroup}/spamfilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Spam Filter' object.",
                                    "method" : "POST",
                                    "name" : "spamfilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "spamlevel" : {
                                             "description" : "Spam Level",
                                             "minimum" : 0,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/spamfilter",
                              "text" : "spamfilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Archive Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_archivefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Archive Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_archivefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "contenttype" : {
                                                   "description" : "Content Type",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/what/{ogroup}/archivefilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Archive Filter' object.",
                                    "method" : "POST",
                                    "name" : "archivefilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "contenttype" : {
                                             "description" : "Content Type",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/archivefilter",
                              "text" : "archivefilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Match Filename' object settings.",
                                          "method" : "GET",
                                          "name" : "read_filenamefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Match Filename' object.",
                                          "method" : "PUT",
                                          "name" : "update_filenamefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "filename" : {
                                                   "description" : "Filename filter",
                                                   "maxLength" : 1024,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/what/{ogroup}/filenamefilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Match Filename' object.",
                                    "method" : "POST",
                                    "name" : "filenamefilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "filename" : {
                                             "description" : "Filename filter",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/filenamefilter",
                              "text" : "filenamefilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Virus Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_virusfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Virus Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_virusfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/what/{ogroup}/virusfilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Virus Filter' object.",
                                    "method" : "POST",
                                    "name" : "virusfilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/virusfilter",
                              "text" : "virusfilter"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete a 'what' group.",
                              "method" : "DELETE",
                              "name" : "delete_{$oclass}_group",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "path" : "/config/ruledb/what/{ogroup}",
                        "text" : "{ogroup}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'what' groups.",
                        "method" : "GET",
                        "name" : "list_what_groups",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Create a new 'what' group.",
                        "method" : "POST",
                        "name" : "create_what_group",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "info" : {
                                 "description" : "Informational comment.",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "Group name.",
                                 "maxLength" : 255,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/what",
                  "text" : "what"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'when' group properties",
                                    "method" : "GET",
                                    "name" : "get_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "info" : {
                                             "type" : "string"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Modify 'when' group properties",
                                    "method" : "PUT",
                                    "name" : "set_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Group name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/when/{ogroup}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Remove an object from the 'when' group.",
                                          "method" : "DELETE",
                                          "name" : "delete_object",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Group ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/when/{ogroup}/objects/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "List 'when' group objects.",
                                    "method" : "GET",
                                    "name" : "objects",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/when/{ogroup}/objects",
                              "text" : "objects"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'TimeFrame' object settings.",
                                          "method" : "GET",
                                          "name" : "read_timeframe",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'TimeFrame' object.",
                                          "method" : "PUT",
                                          "name" : "update_timeframe",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "end" : {
                                                   "description" : "End time in `H:i` format (00:00).",
                                                   "pattern" : "\\d?\\d:\\d?\\d",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "start" : {
                                                   "description" : "Start time in `H:i` format (00:00).",
                                                   "pattern" : "\\d?\\d:\\d?\\d",
                                                   "type" : "string"
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
                                    "path" : "/config/ruledb/when/{ogroup}/timeframe/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'TimeFrame' object.",
                                    "method" : "POST",
                                    "name" : "timeframe",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "end" : {
                                             "description" : "End time in `H:i` format (00:00).",
                                             "pattern" : "\\d?\\d:\\d?\\d",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "start" : {
                                             "description" : "Start time in `H:i` format (00:00).",
                                             "pattern" : "\\d?\\d:\\d?\\d",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/when/{ogroup}/timeframe",
                              "text" : "timeframe"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete a 'when' group.",
                              "method" : "DELETE",
                              "name" : "delete_{$oclass}_group",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "path" : "/config/ruledb/when/{ogroup}",
                        "text" : "{ogroup}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'when' groups.",
                        "method" : "GET",
                        "name" : "list_when_groups",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Create a new 'when' group.",
                        "method" : "POST",
                        "name" : "create_when_group",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "info" : {
                                 "description" : "Informational comment.",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "Group name.",
                                 "maxLength" : 255,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/when",
                  "text" : "when"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Get 'who' group properties",
                                    "method" : "GET",
                                    "name" : "get_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "info" : {
                                             "type" : "string"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "description" : "Modify 'who' group properties",
                                    "method" : "PUT",
                                    "name" : "set_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Group name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/who/{ogroup}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Remove an object from the 'who' group.",
                                          "method" : "DELETE",
                                          "name" : "delete_object",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Group ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/objects/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "description" : "List 'who' group objects.",
                                    "method" : "GET",
                                    "name" : "objects",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/objects",
                              "text" : "objects"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Mail address' object settings.",
                                          "method" : "GET",
                                          "name" : "read_email",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Mail address' object.",
                                          "method" : "PUT",
                                          "name" : "update_email",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "email" : {
                                                   "description" : "Email address.",
                                                   "format" : "email",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/who/{ogroup}/email/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Mail address' object.",
                                    "method" : "POST",
                                    "name" : "email",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "email" : {
                                             "description" : "Email address.",
                                             "format" : "email",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/email",
                              "text" : "email"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Domain' object settings.",
                                          "method" : "GET",
                                          "name" : "read_domain",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Domain' object.",
                                          "method" : "PUT",
                                          "name" : "update_domain",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "domain" : {
                                                   "description" : "DNS domain name (Sender).",
                                                   "format" : "dns-name",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/who/{ogroup}/domain/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Domain' object.",
                                    "method" : "POST",
                                    "name" : "domain",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "domain" : {
                                             "description" : "DNS domain name (Sender).",
                                             "format" : "dns-name",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/domain",
                              "text" : "domain"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'Regular Expression' object settings.",
                                          "method" : "GET",
                                          "name" : "read_regex",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'Regular Expression' object.",
                                          "method" : "PUT",
                                          "name" : "update_regex",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "regex" : {
                                                   "description" : "Email address regular expression.",
                                                   "maxLength" : 1024,
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
                                    "path" : "/config/ruledb/who/{ogroup}/regex/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'Regular Expression' object.",
                                    "method" : "POST",
                                    "name" : "regex",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "regex" : {
                                             "description" : "Email address regular expression.",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/regex",
                              "text" : "regex"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'IP Address' object settings.",
                                          "method" : "GET",
                                          "name" : "read_ip",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'IP Address' object.",
                                          "method" : "PUT",
                                          "name" : "update_ip",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ip" : {
                                                   "description" : "IP address",
                                                   "format" : "ip",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/who/{ogroup}/ip/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'IP Address' object.",
                                    "method" : "POST",
                                    "name" : "ip",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ip" : {
                                             "description" : "IP address",
                                             "format" : "ip",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/ip",
                              "text" : "ip"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'IP Network' object settings.",
                                          "method" : "GET",
                                          "name" : "read_network",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'IP Network' object.",
                                          "method" : "PUT",
                                          "name" : "update_network",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "cidr" : {
                                                   "description" : "Network address in CIDR notation.",
                                                   "format" : "CIDR",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
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
                                    "path" : "/config/ruledb/who/{ogroup}/network/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'IP Network' object.",
                                    "method" : "POST",
                                    "name" : "network",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "cidr" : {
                                             "description" : "Network address in CIDR notation.",
                                             "format" : "CIDR",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/network",
                              "text" : "network"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'LDAP Group' object settings.",
                                          "method" : "GET",
                                          "name" : "read_ldap",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'LDAP Group' object.",
                                          "method" : "PUT",
                                          "name" : "update_ldap",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "group" : {
                                                   "description" : "LDAP Group DN",
                                                   "maxLength" : 1024,
                                                   "minLength" : 1,
                                                   "optional" : 1,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "mode" : {
                                                   "description" : "Operational mode. You can either match 'any' user, match when no such user exists with 'none', or match when the user is member of a specific group.",
                                                   "enum" : [
                                                      "any",
                                                      "none",
                                                      "group"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "profile" : {
                                                   "description" : "Profile ID.",
                                                   "format" : "pve-configid",
                                                   "optional" : 1,
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
                                    "path" : "/config/ruledb/who/{ogroup}/ldap/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'LDAP Group' object.",
                                    "method" : "POST",
                                    "name" : "ldap",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "group" : {
                                             "description" : "LDAP Group DN",
                                             "maxLength" : 1024,
                                             "minLength" : 1,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "mode" : {
                                             "description" : "Operational mode. You can either match 'any' user, match when no such user exists with 'none', or match when the user is member of a specific group.",
                                             "enum" : [
                                                "any",
                                                "none",
                                                "group"
                                             ],
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/ldap",
                              "text" : "ldap"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "description" : "Read 'LDAP User' object settings.",
                                          "method" : "GET",
                                          "name" : "read_ldapuser",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "description" : "Update 'LDAP User' object.",
                                          "method" : "PUT",
                                          "name" : "update_ldapuser",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "account" : {
                                                   "description" : "LDAP user account name.",
                                                   "maxLength" : 1024,
                                                   "minLength" : 1,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "profile" : {
                                                   "description" : "Profile ID.",
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
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/ldapuser/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "description" : "Add 'LDAP User' object.",
                                    "method" : "POST",
                                    "name" : "ldapuser",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "account" : {
                                             "description" : "LDAP user account name.",
                                             "maxLength" : 1024,
                                             "minLength" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/ldapuser",
                              "text" : "ldapuser"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete a 'who' group.",
                              "method" : "DELETE",
                              "name" : "delete_{$oclass}_group",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "path" : "/config/ruledb/who/{ogroup}",
                        "text" : "{ogroup}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Get list of 'who' groups.",
                        "method" : "GET",
                        "name" : "list_who_groups",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Create a new 'who' group.",
                        "method" : "POST",
                        "name" : "create_who_group",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "info" : {
                                 "description" : "Informational comment.",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "Group name.",
                                 "maxLength" : 255,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
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
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
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
               },
               "POST" : {
                  "description" : "Reset PMG rule database back to factory defaults.",
                  "method" : "POST",
                  "name" : "reset_ruledb",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
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
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "description" : "Remove an object from the SMTP whitelist.",
                              "method" : "DELETE",
                              "name" : "delete_object",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/objects/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Get list of all SMTP whitelist entries.",
                        "method" : "GET",
                        "name" : "objects",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/objects",
                  "text" : "objects"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'Mail address' object settings.",
                              "method" : "GET",
                              "name" : "read_email",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'Mail address' object.",
                              "method" : "PUT",
                              "name" : "update_email",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "email" : {
                                       "description" : "Email address.",
                                       "format" : "email",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
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
                        "path" : "/config/whitelist/email/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'Mail address' object.",
                        "method" : "POST",
                        "name" : "email",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "email" : {
                                 "description" : "Email address.",
                                 "format" : "email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/email",
                  "text" : "email"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'Mail address' object settings.",
                              "method" : "GET",
                              "name" : "read_receiver",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'Mail address' object.",
                              "method" : "PUT",
                              "name" : "update_receiver",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "email" : {
                                       "description" : "Email address.",
                                       "format" : "email",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
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
                        "path" : "/config/whitelist/receiver/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'Mail address' object.",
                        "method" : "POST",
                        "name" : "receiver",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "email" : {
                                 "description" : "Email address.",
                                 "format" : "email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/receiver",
                  "text" : "receiver"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'Domain' object settings.",
                              "method" : "GET",
                              "name" : "read_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'Domain' object.",
                              "method" : "PUT",
                              "name" : "update_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "domain" : {
                                       "description" : "DNS domain name (Sender).",
                                       "format" : "dns-name",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
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
                        "path" : "/config/whitelist/domain/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'Domain' object.",
                        "method" : "POST",
                        "name" : "domain",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "DNS domain name (Sender).",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/domain",
                  "text" : "domain"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'Domain' object settings.",
                              "method" : "GET",
                              "name" : "read_receiver_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'Domain' object.",
                              "method" : "PUT",
                              "name" : "update_receiver_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "domain" : {
                                       "description" : "DNS domain name (Sender).",
                                       "format" : "dns-name",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
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
                        "path" : "/config/whitelist/receiver_domain/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'Domain' object.",
                        "method" : "POST",
                        "name" : "receiver_domain",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "DNS domain name (Sender).",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/receiver_domain",
                  "text" : "receiver_domain"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'Regular Expression' object settings.",
                              "method" : "GET",
                              "name" : "read_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'Regular Expression' object.",
                              "method" : "PUT",
                              "name" : "update_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "regex" : {
                                       "description" : "Email address regular expression.",
                                       "maxLength" : 1024,
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
                        "path" : "/config/whitelist/regex/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'Regular Expression' object.",
                        "method" : "POST",
                        "name" : "regex",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "regex" : {
                                 "description" : "Email address regular expression.",
                                 "maxLength" : 1024,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/regex",
                  "text" : "regex"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'Regular Expression' object settings.",
                              "method" : "GET",
                              "name" : "read_receiver_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'Regular Expression' object.",
                              "method" : "PUT",
                              "name" : "update_receiver_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "regex" : {
                                       "description" : "Email address regular expression.",
                                       "maxLength" : 1024,
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
                        "path" : "/config/whitelist/receiver_regex/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'Regular Expression' object.",
                        "method" : "POST",
                        "name" : "receiver_regex",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "regex" : {
                                 "description" : "Email address regular expression.",
                                 "maxLength" : 1024,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/receiver_regex",
                  "text" : "receiver_regex"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'IP Address' object settings.",
                              "method" : "GET",
                              "name" : "read_ip",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'IP Address' object.",
                              "method" : "PUT",
                              "name" : "update_ip",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "ip" : {
                                       "description" : "IP address",
                                       "format" : "ip",
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
                        "path" : "/config/whitelist/ip/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'IP Address' object.",
                        "method" : "POST",
                        "name" : "ip",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "ip" : {
                                 "description" : "IP address",
                                 "format" : "ip",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/ip",
                  "text" : "ip"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Read 'IP Network' object settings.",
                              "method" : "GET",
                              "name" : "read_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "description" : "Update 'IP Network' object.",
                              "method" : "PUT",
                              "name" : "update_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "cidr" : {
                                       "description" : "Network address in CIDR notation.",
                                       "format" : "CIDR",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
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
                        "path" : "/config/whitelist/network/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "description" : "Add 'IP Network' object.",
                        "method" : "POST",
                        "name" : "network",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "Network address in CIDR notation.",
                                 "format" : "CIDR",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/network",
                  "text" : "network"
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
                     "check" : [
                        "admin",
                        "audit"
                     ]
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
            "path" : "/config/whitelist",
            "text" : "whitelist"
         },
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Get LDAP profile configuration.",
                              "method" : "GET",
                              "name" : "read_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {}
                           },
                           "PUT" : {
                              "description" : "Update LDAP profile settings.",
                              "method" : "PUT",
                              "name" : "update_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "accountattr" : {
                                       "default" : "sAMAccountName, uid",
                                       "description" : "Account attribute name name.",
                                       "format" : "string-list",
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
                                    "comment" : {
                                       "description" : "Description.",
                                       "maxLength" : 4096,
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
                                    "disable" : {
                                       "description" : "Flag to disable/deactivate the entry.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
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
                                    "groupclass" : {
                                       "default" : "group, univentionGroup, ipausergroup",
                                       "description" : "List of objectclasses for groups.",
                                       "format" : "string-list",
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
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "server1" : {
                                       "description" : "Server address.",
                                       "format" : "address",
                                       "maxLength" : 256,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "server2" : {
                                       "description" : "Fallback server address. Userd when the first server is not available.",
                                       "format" : "address",
                                       "maxLength" : 256,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 },
                                 "type" : "object"
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/ldap/{profile}/config",
                        "text" : "config"
                     },
                     {
                        "info" : {
                           "POST" : {
                              "description" : "Synchronice LDAP users to local database.",
                              "method" : "POST",
                              "name" : "sync_profile",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/ldap/{profile}/sync",
                        "text" : "sync"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "Get all email addresses for the specified user.",
                                    "method" : "GET",
                                    "name" : "address_list",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "email" : {
                                             "description" : "Email address.",
                                             "format" : "email",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "email" : {
                                                "type" : "string"
                                             },
                                             "primary" : {
                                                "type" : "boolean"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ldap/{profile}/users/{email}",
                              "text" : "{email}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "description" : "List LDAP users.",
                              "method" : "GET",
                              "name" : "profile_list_users",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "account" : {
                                          "type" : "string"
                                       },
                                       "dn" : {
                                          "type" : "string"
                                       },
                                       "pmail" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{pmail}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ldap/{profile}/users",
                        "text" : "users"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "description" : "List LDAP group members.",
                                    "method" : "GET",
                                    "name" : "profile_list_group_members",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "gid" : {
                                             "description" : "Group ID",
                                             "type" : "number",
                                             "typetext" : "<number>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "account" : {
                                                "type" : "string"
                                             },
                                             "dn" : {
                                                "type" : "string"
                                             },
                                             "pmail" : {
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
                              "path" : "/config/ldap/{profile}/groups/{gid}",
                              "text" : "{gid}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "description" : "List LDAP groups.",
                              "method" : "GET",
                              "name" : "profile_list_groups",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "dn" : {
                                          "type" : "string"
                                       },
                                       "gid" : {
                                          "type" : "number"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{gid}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ldap/{profile}/groups",
                        "text" : "groups"
                     }
                  ],
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete an LDAP profile",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "profile" : {
                                 "description" : "Profile ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "Directory index",
                        "method" : "GET",
                        "name" : "profile_index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "profile" : {
                                 "description" : "Profile ID.",
                                 "format" : "pve-configid",
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
                  "path" : "/config/ldap/{profile}",
                  "text" : "{profile}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "List configured LDAP profiles.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "optional" : 1,
                              "type" : "string"
                           },
                           "disable" : {
                              "type" : "boolean"
                           },
                           "gcount" : {
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "mcount" : {
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "mode" : {
                              "type" : "string"
                           },
                           "profile" : {
                              "type" : "string"
                           },
                           "server1" : {
                              "type" : "string"
                           },
                           "server2" : {
                              "optional" : 1,
                              "type" : "string"
                           },
                           "ucount" : {
                              "optional" : 1,
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{profile}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add LDAP profile.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "accountattr" : {
                           "default" : "sAMAccountName, uid",
                           "description" : "Account attribute name name.",
                           "format" : "string-list",
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
                        "comment" : {
                           "description" : "Description.",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "disable" : {
                           "description" : "Flag to disable/deactivate the entry.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
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
                        "groupclass" : {
                           "default" : "group, univentionGroup, ipausergroup",
                           "description" : "List of objectclasses for groups.",
                           "format" : "string-list",
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
                        "profile" : {
                           "description" : "Profile ID.",
                           "format" : "pve-configid",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server1" : {
                           "description" : "Server address.",
                           "format" : "address",
                           "maxLength" : 256,
                           "optional" : 0,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server2" : {
                           "description" : "Fallback server address. Userd when the first server is not available.",
                           "format" : "address",
                           "maxLength" : 256,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
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
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "Read Domain data (comment).",
                        "method" : "GET",
                        "name" : "read",
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "comment" : {
                                 "type" : "string"
                              },
                              "domain" : {
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Update relay domain data (comment).",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
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
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "type" : "string"
                           },
                           "domain" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{domain}",
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
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "domain" : {
                           "description" : "Domain name.",
                           "format" : "dns-name",
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
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
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete a fetchmail configuration entry.",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "Read fetchmail user configuration.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "enable" : {
                                 "default" : 0,
                                 "description" : "Flag to enable or disable polling.",
                                 "optional" : 1,
                                 "type" : "boolean"
                              },
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              },
                              "interval" : {
                                 "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                                 "maximum" : 2016,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer"
                              },
                              "keep" : {
                                 "default" : 0,
                                 "description" : "Keep retrieved messages on the remote mailserver.",
                                 "optional" : 1,
                                 "type" : "boolean"
                              },
                              "pass" : {
                                 "description" : "The password used tfor server login.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "port" : {
                                 "description" : "Port number.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer"
                              },
                              "protocol" : {
                                 "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                                 "enum" : [
                                    "pop3",
                                    "imap"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "server" : {
                                 "description" : "Server address (IP or DNS name).",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "ssl" : {
                                 "default" : 0,
                                 "description" : "Use SSL.",
                                 "optional" : 1,
                                 "type" : "boolean"
                              },
                              "target" : {
                                 "description" : "The target email address (where to deliver fetched mails).",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "optional" : 1,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "user" : {
                                 "description" : "The user identification to be used when logging in to the server",
                                 "maxLength" : 64,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Update fetchmail user configuration.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "enable" : {
                                 "default" : 0,
                                 "description" : "Flag to enable or disable polling.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              },
                              "interval" : {
                                 "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                                 "maximum" : 2016,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 2016)"
                              },
                              "keep" : {
                                 "default" : 0,
                                 "description" : "Keep retrieved messages on the remote mailserver.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "pass" : {
                                 "description" : "The password used tfor server login.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "port" : {
                                 "description" : "Port number.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 65535)"
                              },
                              "protocol" : {
                                 "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                                 "enum" : [
                                    "pop3",
                                    "imap"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "server" : {
                                 "description" : "Server address (IP or DNS name).",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ssl" : {
                                 "default" : 0,
                                 "description" : "Use SSL.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "target" : {
                                 "description" : "The target email address (where to deliver fetched mails).",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "optional" : 1,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "user" : {
                                 "description" : "The user identification to be used when logging in to the server",
                                 "maxLength" : 64,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/fetchmail/{id}",
                  "text" : "{id}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "List fetchmail users.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "enable" : {
                              "default" : 0,
                              "description" : "Flag to enable or disable polling.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "maxLength" : 16,
                              "pattern" : "[A-Za-z0-9]+",
                              "type" : "string"
                           },
                           "interval" : {
                              "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                              "maximum" : 2016,
                              "minimum" : 1,
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep" : {
                              "default" : 0,
                              "description" : "Keep retrieved messages on the remote mailserver.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "pass" : {
                              "description" : "The password used tfor server login.",
                              "maxLength" : 64,
                              "optional" : 1,
                              "type" : "string"
                           },
                           "port" : {
                              "description" : "Port number.",
                              "maximum" : 65535,
                              "minimum" : 1,
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "protocol" : {
                              "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                              "enum" : [
                                 "pop3",
                                 "imap"
                              ],
                              "optional" : 1,
                              "type" : "string"
                           },
                           "server" : {
                              "description" : "Server address (IP or DNS name).",
                              "format" : "address",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "ssl" : {
                              "default" : 0,
                              "description" : "Use SSL.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "target" : {
                              "description" : "The target email address (where to deliver fetched mails).",
                              "maxLength" : 512,
                              "minLength" : 3,
                              "optional" : 1,
                              "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                              "type" : "string"
                           },
                           "user" : {
                              "description" : "The user identification to be used when logging in to the server",
                              "maxLength" : 64,
                              "minLength" : 1,
                              "optional" : 1,
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{id}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Create fetchmail user configuration.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "enable" : {
                           "default" : 0,
                           "description" : "Flag to enable or disable polling.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "interval" : {
                           "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                           "maximum" : 2016,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 2016)"
                        },
                        "keep" : {
                           "default" : 0,
                           "description" : "Keep retrieved messages on the remote mailserver.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "pass" : {
                           "description" : "The password used tfor server login.",
                           "maxLength" : 64,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "port" : {
                           "description" : "Port number.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "protocol" : {
                           "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                           "enum" : [
                              "pop3",
                              "imap"
                           ],
                           "type" : "string"
                        },
                        "server" : {
                           "description" : "Server address (IP or DNS name).",
                           "format" : "address",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "ssl" : {
                           "default" : 0,
                           "description" : "Use SSL.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "target" : {
                           "description" : "The target email address (where to deliver fetched mails).",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                           "type" : "string"
                        },
                        "user" : {
                           "description" : "The user identification to be used when logging in to the server",
                           "maxLength" : 64,
                           "minLength" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "description" : "Unique ID",
                     "maxLength" : 16,
                     "pattern" : "[A-Za-z0-9]+",
                     "type" : "string"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/fetchmail",
            "text" : "fetchmail"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete a transport map entry",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "Read transport map entry.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "comment" : {
                                 "type" : "string"
                              },
                              "domain" : {
                                 "type" : "string"
                              },
                              "host" : {
                                 "type" : "string"
                              },
                              "port" : {
                                 "type" : "integer"
                              },
                              "use_mx" : {
                                 "type" : "boolean"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Update transport map entry.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "host" : {
                                 "description" : "Target host (name or IP address).",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "port" : {
                                 "description" : "SMTP port.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 65535)"
                              },
                              "use_mx" : {
                                 "description" : "Enable MX lookups.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/transport/{domain}",
                  "text" : "{domain}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "List transport map entries.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "type" : "string"
                           },
                           "domain" : {
                              "type" : "string"
                           },
                           "host" : {
                              "type" : "string"
                           },
                           "port" : {
                              "type" : "integer"
                           },
                           "use_mx" : {
                              "type" : "boolean"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{id}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add transport map entry.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "domain" : {
                           "description" : "Domain name.",
                           "format" : "transport-domain",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "host" : {
                           "description" : "Target host (name or IP address).",
                           "format" : "address",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "port" : {
                           "default" : 25,
                           "description" : "SMTP port.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "use_mx" : {
                           "default" : 1,
                           "description" : "Enable MX lookups.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/transport",
            "text" : "transport"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete a truster network",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "IPv4 or IPv6 network in CIDR notation.",
                                 "format" : "CIDR",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "description" : "Read trusted network data (comment).",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "IPv4 or IPv6 network in CIDR notation.",
                                 "format" : "CIDR",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "cidr" : {
                                 "type" : "string"
                              },
                              "comment" : {
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Update trusted data (comment).",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "IPv4 or IPv6 network in CIDR notation.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "comment" : {
                                 "description" : "Comment.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/mynetworks/{cidr}",
                  "text" : "{cidr}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "List of trusted networks from where SMTP clients are allowed to relay mail through Proxmox Mail Gateway.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "cidr" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{cide}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add a trusted network.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "cidr" : {
                           "description" : "IPv4 or IPv6 network in CIDR notation.",
                           "format" : "CIDR",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/mynetworks",
            "text" : "mynetworks"
         },
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "description" : "Cluster node index.",
                        "method" : "GET",
                        "name" : "nodes",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "cid" : {
                                    "type" : "integer"
                                 },
                                 "fingerprint" : {
                                    "type" : "string"
                                 },
                                 "hostrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "ip" : {
                                    "type" : "string"
                                 },
                                 "name" : {
                                    "type" : "string"
                                 },
                                 "rootrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "type" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Add an node to the cluster config.",
                        "method" : "POST",
                        "name" : "add_node",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "fingerprint" : {
                                 "description" : "SSL certificate fingerprint.",
                                 "optional" : 0,
                                 "pattern" : "^(:?[A-Z0-9][A-Z0-9]:){31}[A-Z0-9][A-Z0-9]$",
                                 "type" : "string"
                              },
                              "hostrsapubkey" : {
                                 "description" : "Public SSH RSA key for the host.",
                                 "optional" : 0,
                                 "pattern" : "^[A-Za-z0-9\\.\\/\\+]{200,}$",
                                 "type" : "string"
                              },
                              "ip" : {
                                 "description" : "IP address.",
                                 "format" : "ip",
                                 "optional" : 0,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "maxcid" : {
                                 "description" : "Maximum used cluster node ID (used internally, do not modify).",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "name" : {
                                 "description" : "Node name.",
                                 "format" : "pve-node",
                                 "optional" : 0,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "rootrsapubkey" : {
                                 "description" : "Public SSH RSA key for the root user.",
                                 "optional" : 0,
                                 "pattern" : "^[A-Za-z0-9\\.\\/\\+]{200,}$",
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "Returns the resulting node list.",
                           "items" : {
                              "properties" : {
                                 "cid" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/nodes",
                  "text" : "nodes"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Cluster node status.",
                        "method" : "GET",
                        "name" : "status",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "list_single_node" : {
                                 "default" : 0,
                                 "description" : "List local node if there is no cluster defined. Please note that RSA keys and fingerprint are not valid in that case.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "cid" : {
                                    "type" : "integer"
                                 },
                                 "fingerprint" : {
                                    "type" : "string"
                                 },
                                 "hostrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "ip" : {
                                    "type" : "string"
                                 },
                                 "name" : {
                                    "type" : "string"
                                 },
                                 "rootrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "type" : {
                                    "type" : "string"
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
                  "path" : "/config/cluster/status",
                  "text" : "status"
               },
               {
                  "info" : {
                     "POST" : {
                        "description" : "Create initial cluster config with current node as master.",
                        "method" : "POST",
                        "name" : "create",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/create",
                  "text" : "create"
               },
               {
                  "info" : {
                     "POST" : {
                        "description" : "Join local node to an existing cluster.",
                        "method" : "POST",
                        "name" : "join",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "fingerprint" : {
                                 "description" : "SSL certificate fingerprint.",
                                 "pattern" : "^(:?[A-Z0-9][A-Z0-9]:){31}[A-Z0-9][A-Z0-9]$",
                                 "type" : "string"
                              },
                              "master_ip" : {
                                 "description" : "IP address.",
                                 "format" : "ip",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "password" : {
                                 "description" : "Superuser password.",
                                 "maxLength" : 128,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/join",
                  "text" : "join"
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
            "path" : "/config/cluster",
            "text" : "cluster"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get Mime Types List",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mimetype" : {
                              "type" : "string"
                           },
                           "text" : {
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
            "path" : "/config/mimetypes",
            "text" : "mimetypes"
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
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
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
                        "advfilter" : {
                           "default" : 1,
                           "description" : "Use advanced filters for statistic.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
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
                        "email" : {
                           "default" : "admin@domain.tld",
                           "description" : "Administrator E-Mail address.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "http_proxy" : {
                           "description" : "Specify external http proxy which is used for downloads (example: 'http://username:password@host:port/')",
                           "optional" : 1,
                           "pattern" : "http://.*",
                           "type" : "string"
                        },
                        "statlifetime" : {
                           "default" : 7,
                           "description" : "User Statistics Lifetime (days)",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
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
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
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
                        },
                        "safebrowsing" : {
                           "default" : 1,
                           "description" : "Enables support for Google Safe Browsing.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
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
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
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
                        "ext_port" : {
                           "default" : 26,
                           "description" : "SMTP port number for incoming mail (untrusted). This must be a different number than 'int_port'.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
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
                        "int_port" : {
                           "default" : 25,
                           "description" : "SMTP port number for outgoing mail (trusted).",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
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
                           "format" : "address",
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
                        "smarthost" : {
                           "description" : "When set, all outgoing mails are deliverd to the specified smarthost.",
                           "format" : "address",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
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
                           "description" : "Enable TLS.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "tlsheader" : {
                           "default" : 0,
                           "description" : "Add TLS received header.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "tlslog" : {
                           "default" : 0,
                           "description" : "Enable TLS Logging.",
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
                           "description" : "Enable receiver verification. The value spefifies the numerical reply code when the Postfix SMTP server rejects a recipient address.",
                           "enum" : [
                              "450",
                              "550"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
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
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
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
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
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
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Read spamquar configuration properties.",
                  "method" : "GET",
                  "name" : "read_spamquar_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "description" : "Update spamquar configuration properties.",
                  "method" : "PUT",
                  "name" : "update_spamquar_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "allowhrefs" : {
                           "default" : 1,
                           "description" : "Allow to view hyperlinks.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "authmode" : {
                           "default" : "ticket",
                           "description" : "Authentication mode to access the quarantine interface. Mode 'ticket' allows login using tickets sent with the daily spam report. Mode 'ldap' requires to login using an LDAP account. Finally, mode 'ldapticket' allows both ways.",
                           "enum" : [
                              "ticket",
                              "ldap",
                              "ldapticket"
                           ],
                           "optional" : 1,
                           "type" : "string"
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
                        "hostname" : {
                           "description" : "Quarantine Host. Usefule if you run a Cluster and want users to connect to a specific host.",
                           "format" : "address",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "lifetime" : {
                           "default" : 7,
                           "description" : "Quarantine life time (days)",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "mailfrom" : {
                           "description" : "Text for 'From' header in daily spam report mails.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "reportstyle" : {
                           "default" : "verbose",
                           "description" : "Spam report style.",
                           "enum" : [
                              "none",
                              "short",
                              "verbose",
                              "custom"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "viewimages" : {
                           "default" : 1,
                           "description" : "Allow to view images.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/spamquar",
            "text" : "spamquar"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Read virusquar configuration properties.",
                  "method" : "GET",
                  "name" : "read_virusquar_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "description" : "Update virusquar configuration properties.",
                  "method" : "PUT",
                  "name" : "update_virusquar_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "allowhrefs" : {
                           "default" : 1,
                           "description" : "Allow to view hyperlinks.",
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
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "lifetime" : {
                           "default" : 7,
                           "description" : "Quarantine life time (days)",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "viewimages" : {
                           "default" : 1,
                           "description" : "Allow to view images.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/virusquar",
            "text" : "virusquar"
         },
         {
            "info" : {
               "POST" : {
                  "description" : "Test Regex",
                  "method" : "POST",
                  "name" : "regextest",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "regex" : {
                           "description" : "The Regex to test",
                           "maxLength" : 1024,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "text" : {
                           "description" : "The String to test",
                           "maxLength" : 1024,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "protected" : 0,
                  "returns" : {
                     "type" : "number"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/regextest",
            "text" : "regextest"
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
                           "GET" : {
                              "description" : "Print Postfix queue domain and age distribution.",
                              "method" : "GET",
                              "name" : "qshape",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "queue" : {
                                       "default" : "deferred",
                                       "description" : "Postfix queue name.",
                                       "enum" : [
                                          "deferred",
                                          "active",
                                          "incoming",
                                          "hold"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
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
                        "path" : "/nodes/{node}/postfix/qshape",
                        "text" : "qshape"
                     },
                     {
                        "children" : [
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "description" : "Delete one message with the named queue ID.",
                                          "method" : "DELETE",
                                          "name" : "delete_queued_mail",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "queue" : {
                                                   "description" : "Postfix queue name.",
                                                   "enum" : [
                                                      "deferred",
                                                      "active",
                                                      "incoming",
                                                      "hold"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "queue_id" : {
                                                   "description" : "The Message queue ID.",
                                                   "maxLength" : 20,
                                                   "minLength" : 8,
                                                   "pattern" : "[a-zA-Z0-9]+",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       },
                                       "GET" : {
                                          "description" : "Get the contents of a queued mail.",
                                          "method" : "GET",
                                          "name" : "read_queued_mail",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "body" : {
                                                   "default" : 0,
                                                   "description" : "Include body content.",
                                                   "optional" : 1,
                                                   "type" : "boolean",
                                                   "typetext" : "<boolean>"
                                                },
                                                "header" : {
                                                   "default" : 1,
                                                   "description" : "Show message header content.",
                                                   "optional" : 1,
                                                   "type" : "boolean",
                                                   "typetext" : "<boolean>"
                                                },
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "queue" : {
                                                   "description" : "Postfix queue name.",
                                                   "enum" : [
                                                      "deferred",
                                                      "active",
                                                      "incoming",
                                                      "hold"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "queue_id" : {
                                                   "description" : "The Message queue ID.",
                                                   "maxLength" : 20,
                                                   "minLength" : 8,
                                                   "pattern" : "[a-zA-Z0-9]+",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "type" : "string"
                                          }
                                       },
                                       "POST" : {
                                          "description" : "Schedule immediate delivery of deferred mail with the specified queue ID.",
                                          "method" : "POST",
                                          "name" : "flush_queued_mail",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "queue" : {
                                                   "description" : "Postfix queue name.",
                                                   "enum" : [
                                                      "deferred",
                                                      "active",
                                                      "incoming",
                                                      "hold"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "queue_id" : {
                                                   "description" : "The Message queue ID.",
                                                   "maxLength" : 20,
                                                   "minLength" : 8,
                                                   "pattern" : "[a-zA-Z0-9]+",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/nodes/{node}/postfix/queue/{queue}/{queue_id}",
                                    "text" : "{queue_id}"
                                 }
                              ],
                              "info" : {
                                 "DELETE" : {
                                    "description" : "Delete all mails in the queue.",
                                    "method" : "DELETE",
                                    "name" : "delete_queue",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "queue" : {
                                             "description" : "Postfix queue name.",
                                             "enum" : [
                                                "deferred",
                                                "active",
                                                "incoming",
                                                "hold"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 },
                                 "GET" : {
                                    "description" : "List the mail queue for a specific domain.",
                                    "method" : "GET",
                                    "name" : "mailq",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "filter" : {
                                             "description" : "Filter string.",
                                             "maxLength" : 64,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
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
                                          "queue" : {
                                             "description" : "Postfix queue name.",
                                             "enum" : [
                                                "deferred",
                                                "active",
                                                "incoming",
                                                "hold"
                                             ],
                                             "type" : "string"
                                          },
                                          "start" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
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
                                             "href" : "{queue_id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/nodes/{node}/postfix/queue/{queue}",
                              "text" : "{queue}"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete all mails in all posfix queues.",
                              "method" : "DELETE",
                              "name" : "delete_all_queues",
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
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "queue_index",
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
                        "path" : "/nodes/{node}/postfix/queue",
                        "text" : "queue"
                     },
                     {
                        "info" : {
                           "POST" : {
                              "description" : "Flush the queue: attempt to deliver all queued mail.",
                              "method" : "POST",
                              "name" : "flush_queues",
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
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/postfix/flush_queues",
                        "text" : "flush_queues"
                     },
                     {
                        "info" : {
                           "POST" : {
                              "description" : "Discards the address verification cache.",
                              "method" : "POST",
                              "name" : "discard_verify_cache",
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
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/postfix/discard_verify_cache",
                        "text" : "discard_verify_cache"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Directory index.",
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
                  "path" : "/nodes/{node}/postfix",
                  "text" : "postfix"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "ClamAV virus database status.",
                              "method" : "GET",
                              "name" : "database_status",
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
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "build_time" : {
                                          "type" : "string"
                                       },
                                       "nsigs" : {
                                          "type" : "integer"
                                       },
                                       "type" : {
                                          "type" : "string"
                                       },
                                       "version" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           },
                           "POST" : {
                              "description" : "Update ClamAV virus databases.",
                              "method" : "POST",
                              "name" : "update_database",
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
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/clamav/database",
                        "text" : "database"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Directory index.",
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
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {},
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
                  "path" : "/nodes/{node}/clamav",
                  "text" : "clamav"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "SpamAssassin rules status.",
                              "method" : "GET",
                              "name" : "rules_status",
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
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "channel" : {
                                          "type" : "string"
                                       },
                                       "last_updated" : {
                                          "optional" : 1,
                                          "type" : "integer"
                                       },
                                       "update_avail" : {
                                          "type" : "boolean"
                                       },
                                       "update_version" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       },
                                       "version" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           },
                           "POST" : {
                              "description" : "Update SpamAssassin rules.",
                              "method" : "POST",
                              "name" : "update_rules",
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
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/spamassassin/rules",
                        "text" : "rules"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Directory index.",
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
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {},
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
                  "path" : "/nodes/{node}/spamassassin",
                  "text" : "spamassassin"
               },
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
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
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
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
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
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
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
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
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
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
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
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
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
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
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
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
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
                                          "clamav-daemon",
                                          "clamav-freshclam",
                                          "fetchmail",
                                          "pmgproxy",
                                          "pmgdaemon",
                                          "pmgpolicy",
                                          "pmg-smtp-filter",
                                          "pmgtunnel",
                                          "pmgmirror",
                                          "ssh",
                                          "rsyslog",
                                          "postfix",
                                          "postgres",
                                          "systemd-timesyncd",
                                          "pmg-hourly",
                                          "pmg-daily",
                                          "pmgreport",
                                          "pmgspamreport"
                                       ],
                                       "type" : "string"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
                        "description" : "Read subscription info.",
                        "method" : "GET",
                        "name" : "get",
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
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit",
                              "quser"
                           ]
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "object"
                        }
                     },
                     "POST" : {
                        "description" : "Update subscription info.",
                        "method" : "POST",
                        "name" : "update",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "force" : {
                                 "default" : 0,
                                 "description" : "Always connect to server, even if we have up to date info inside local cache.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "PUT" : {
                        "description" : "Set subscription key.",
                        "method" : "PUT",
                        "name" : "set",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "key" : {
                                 "description" : "Proxmox Mail Gateway subscription key",
                                 "maxLength" : 32,
                                 "pattern" : "pmg([cbsp])-[0-9a-f]{10}",
                                 "type" : "string"
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
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/subscription",
                  "text" : "subscription"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "List available updates.",
                              "method" : "GET",
                              "name" : "list_updates",
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
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           },
                           "POST" : {
                              "description" : "This is used to resynchronize the package index files from their sources (apt-get update).",
                              "method" : "POST",
                              "name" : "update_database",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "notify" : {
                                       "default" : 0,
                                       "description" : "Send notification mail about new packages (to email address specified for user 'root@pam').",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "quiet" : {
                                       "default" : 0,
                                       "description" : "Only produces output suitable for logging, omitting progress indicators.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/apt/update",
                        "text" : "update"
                     },
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Get package changelogs.",
                              "method" : "GET",
                              "name" : "changelog",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "name" : {
                                       "description" : "Package name.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "version" : {
                                       "description" : "Package version.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/apt/changelog",
                        "text" : "changelog"
                     },
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Get package information for important Proxmox packages.",
                              "method" : "GET",
                              "name" : "versions",
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
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
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
                        "path" : "/nodes/{node}/apt/versions",
                        "text" : "versions"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Directory index for apt (Advanced Package Tool).",
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
                              "properties" : {
                                 "id" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/apt",
                  "text" : "apt"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "description" : "Get the detailed syslog entries for a specific mail ID.",
                              "method" : "GET",
                              "name" : "maillog",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "endtime" : {
                                       "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                       "minimum" : 1,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1 - N)"
                                    },
                                    "id" : {
                                       "description" : "Mail ID (as returend by the list API).",
                                       "maxLength" : 64,
                                       "minLength" : 3,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "starttime" : {
                                       "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                       "minimum" : 0,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (0 - N)"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "properties" : {
                                    "client" : {
                                       "description" : "Client address",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "dstatus" : {
                                       "description" : "Delivery status.",
                                       "maxLength" : 1,
                                       "minLength" : 1,
                                       "type" : "string"
                                    },
                                    "from" : {
                                       "description" : "Sender email address.",
                                       "type" : "string"
                                    },
                                    "id" : {
                                       "description" : "Unique ID.",
                                       "type" : "string"
                                    },
                                    "logs" : {
                                       "items" : {
                                          "type" : "string"
                                       },
                                       "type" : "array"
                                    },
                                    "msgid" : {
                                       "description" : "SMTP message ID.",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "qid" : {
                                       "description" : "Postfix qmgr ID.",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "relay" : {
                                       "description" : "ID of relayed mail.",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "rstatus" : {
                                       "description" : "Delivery status of relayed mail.",
                                       "maxLength" : 1,
                                       "minLength" : 1,
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "size" : {
                                       "description" : "The size of the raw email.",
                                       "optional" : 1,
                                       "type" : "number"
                                    },
                                    "time" : {
                                       "description" : "Delivery timestamp.",
                                       "type" : "integer"
                                    },
                                    "to" : {
                                       "description" : "Receiver email address.",
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/tracker/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "Read mail list.",
                        "method" : "GET",
                        "name" : "list_mails",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "endtime" : {
                                 "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "from" : {
                                 "description" : "Sender email address filter.",
                                 "maxLength" : 256,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "greylist" : {
                                 "default" : 0,
                                 "description" : "Include Greylisted entries.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "ndr" : {
                                 "default" : 0,
                                 "description" : "Include NDRs (non delivery reports).",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "starttime" : {
                                 "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "target" : {
                                 "description" : "Receiver email address filter.",
                                 "maxLength" : 256,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "xfilter" : {
                                 "description" : "Only include mails containing this filter string.",
                                 "maxLength" : 256,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "client" : {
                                    "description" : "Client address",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "dstatus" : {
                                    "description" : "Delivery status.",
                                    "maxLength" : 1,
                                    "minLength" : 1,
                                    "type" : "string"
                                 },
                                 "from" : {
                                    "description" : "Sender email address.",
                                    "type" : "string"
                                 },
                                 "id" : {
                                    "description" : "Unique ID.",
                                    "type" : "string"
                                 },
                                 "msgid" : {
                                    "description" : "SMTP message ID.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "qid" : {
                                    "description" : "Postfix qmgr ID.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "relay" : {
                                    "description" : "ID of relayed mail.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "rstatus" : {
                                    "description" : "Delivery status of relayed mail.",
                                    "maxLength" : 1,
                                    "minLength" : 1,
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "size" : {
                                    "description" : "The size of the raw email.",
                                    "optional" : 1,
                                    "type" : "number"
                                 },
                                 "time" : {
                                    "description" : "Delivery timestamp.",
                                    "type" : "integer"
                                 },
                                 "to" : {
                                    "description" : "Receiver email address.",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/tracker",
                  "text" : "tracker"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "description" : "Delete a backup file.",
                              "method" : "DELETE",
                              "name" : "delete",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "filename" : {
                                       "description" : "The backup file name.",
                                       "maxLength" : 256,
                                       "minLength" : 4,
                                       "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                       "type" : "string"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "description" : "Download a backup file.",
                              "download" : 1,
                              "method" : "GET",
                              "name" : "download",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "filename" : {
                                       "description" : "The backup file name.",
                                       "maxLength" : 256,
                                       "minLength" : 4,
                                       "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                       "type" : "string"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           },
                           "POST" : {
                              "description" : "Restore the system configuration.",
                              "method" : "POST",
                              "name" : "restore",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "config" : {
                                       "default" : 0,
                                       "description" : "Restore system configuration.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "database" : {
                                       "default" : 1,
                                       "description" : "Restore the rule database. This is the default.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "filename" : {
                                       "description" : "The backup file name.",
                                       "maxLength" : 256,
                                       "minLength" : 4,
                                       "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                       "type" : "string"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "statistic" : {
                                       "default" : 0,
                                       "description" : "Restore statistic databases. Only considered when you restore the 'database'.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/backup/{filename}",
                        "text" : "{filename}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "description" : "List all stored backups (files named proxmox-backup_{DATE}.tgz).",
                        "method" : "GET",
                        "name" : "list",
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
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "filename" : {
                                    "description" : "The backup file name.",
                                    "maxLength" : 256,
                                    "minLength" : 4,
                                    "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                    "type" : "string"
                                 },
                                 "size" : {
                                    "description" : "Size of backup file in bytes.",
                                    "type" : "integer"
                                 },
                                 "timestamp" : {
                                    "description" : "Backup timestamp (Unix epoch).",
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{filename}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "description" : "Backup the system configuration.",
                        "method" : "POST",
                        "name" : "backup",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "statistic" : {
                                 "default" : 1,
                                 "description" : "Backup statistic databases.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/backup",
                  "text" : "backup"
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Read node RRD statistics",
                        "method" : "GET",
                        "name" : "rrddata",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cf" : {
                                 "description" : "The RRD consolidation function",
                                 "enum" : [
                                    "AVERAGE",
                                    "MAX"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "timeframe" : {
                                 "description" : "Specify the time frame you are interested in.",
                                 "enum" : [
                                    "hour",
                                    "day",
                                    "week",
                                    "month",
                                    "year"
                                 ],
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
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
                  "path" : "/nodes/{node}/rrddata",
                  "text" : "rrddata"
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
                              "service" : {
                                 "description" : "Service ID",
                                 "maxLength" : 128,
                                 "optional" : 1,
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
                              "upgrade" : {
                                 "default" : 0,
                                 "description" : "Run 'apt-get dist-upgrade' instead of normal shell.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
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
               },
               {
                  "info" : {
                     "GET" : {
                        "description" : "Read server status. This is used by the cluster manager to test the node health.",
                        "method" : "GET",
                        "name" : "status",
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
                           "additionalProperties" : 1,
                           "properties" : {
                              "insync" : {
                                 "description" : "Database is synced with other nodes.",
                                 "type" : "boolean"
                              },
                              "time" : {
                                 "description" : "Seconds since 1970-01-01 00:00:00 UTC.",
                                 "minimum" : 1297163644,
                                 "type" : "integer"
                              },
                              "uptime" : {
                                 "description" : "The uptime of the system in seconds.",
                                 "minimum" : 0,
                                 "type" : "integer"
                              }
                           },
                           "type" : "object"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/status",
                  "text" : "status"
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
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete a user.",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
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
                        "description" : "Read User data.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {},
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "description" : "Update user data.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "crypt_pass" : {
                                 "description" : "Encrypted password (see `man crypt`)",
                                 "optional" : 1,
                                 "pattern" : "\\$\\d\\$[a-zA-Z0-9\\.\\/]+\\$[a-zA-Z0-9\\.\\/]+",
                                 "type" : "string"
                              },
                              "delete" : {
                                 "description" : "A list of settings you want to delete.",
                                 "format" : "pve-configid-list",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "email" : {
                                 "description" : "Users E-Mail address.",
                                 "format" : "email",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "enable" : {
                                 "default" : 0,
                                 "description" : "Flag to enable or disable the account.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "expire" : {
                                 "default" : 0,
                                 "description" : "Account expiration date (seconds since epoch). '0' means no expiration date.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "firstname" : {
                                 "description" : "First name.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "keys" : {
                                 "description" : "Keys for two factor auth (yubico).",
                                 "maxLength" : 128,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "lastname" : {
                                 "description" : "Last name.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "password" : {
                                 "description" : "Password",
                                 "maxLength" : 32,
                                 "minLength" : 5,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "role" : {
                                 "description" : "User role. Role 'root' is reseved for the Unix Superuser.",
                                 "enum" : [
                                    "root",
                                    "admin",
                                    "qmanager",
                                    "audit"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
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
                  "path" : "/access/users/{userid}",
                  "text" : "{userid}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "List users.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "optional" : 1,
                              "type" : "string"
                           },
                           "enable" : {
                              "type" : "boolean"
                           },
                           "role" : {
                              "type" : "string"
                           },
                           "userid" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{userid}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Creat new user",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "crypt_pass" : {
                           "description" : "Encrypted password (see `man crypt`)",
                           "optional" : 1,
                           "pattern" : "\\$\\d\\$[a-zA-Z0-9\\.\\/]+\\$[a-zA-Z0-9\\.\\/]+",
                           "type" : "string"
                        },
                        "email" : {
                           "description" : "Users E-Mail address.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "enable" : {
                           "default" : 0,
                           "description" : "Flag to enable or disable the account.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "expire" : {
                           "default" : 0,
                           "description" : "Account expiration date (seconds since epoch). '0' means no expiration date.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "firstname" : {
                           "description" : "First name.",
                           "maxLength" : 64,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "keys" : {
                           "description" : "Keys for two factor auth (yubico).",
                           "maxLength" : 128,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "lastname" : {
                           "description" : "Last name.",
                           "maxLength" : 64,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "password" : {
                           "description" : "Password",
                           "maxLength" : 32,
                           "minLength" : 5,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "role" : {
                           "description" : "User role. Role 'root' is reseved for the Unix Superuser.",
                           "enum" : [
                              "root",
                              "admin",
                              "qmanager",
                              "audit"
                           ],
                           "type" : "string"
                        },
                        "userid" : {
                           "description" : "User ID",
                           "format" : "pmg-userid",
                           "maxLength" : 64,
                           "minLength" : 4,
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
            "path" : "/access/users",
            "text" : "users"
         },
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
                           "enum" : [
                              "pam",
                              "pmg",
                              "quarantine"
                           ],
                           "maxLength" : 32,
                           "optional" : 1,
                           "type" : "string"
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
                        "role" : {
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
                           "minLength" : 4,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "description" : "Each user is allowed to change his own password. Only root can change the password of another user.",
                     "user" : "all"
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
      "children" : [
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete user whitelist entries.",
                        "method" : "DELETE",
                        "name" : "whitelist_delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "address" : {
                                 "description" : "The address you want to remove.",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "pmail" : {
                                 "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                                 "format" : "email",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit",
                              "quser"
                           ]
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/quarantine/whitelist/{address}",
                  "text" : "{address}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Show user whitelist.",
                  "method" : "GET",
                  "name" : "whitelist",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "address" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add user whitelist entries.",
                  "method" : "POST",
                  "name" : "whitelist_add",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "The address you want to add.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                           "type" : "string"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/quarantine/whitelist",
            "text" : "whitelist"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "description" : "Delete user blacklist entries.",
                        "method" : "DELETE",
                        "name" : "blacklist_delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "address" : {
                                 "description" : "The address you want to remove.",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "pmail" : {
                                 "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                                 "format" : "email",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit",
                              "quser"
                           ]
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/quarantine/blacklist/{address}",
                  "text" : "{address}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Show user blacklist.",
                  "method" : "GET",
                  "name" : "blacklist",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "address" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               },
               "POST" : {
                  "description" : "Add user blacklist entries.",
                  "method" : "POST",
                  "name" : "blacklist_add",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "The address you want to add.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                           "type" : "string"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/quarantine/blacklist",
            "text" : "blacklist"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get a list of receivers of spam in the given timespan (Default the last 24 hours).",
                  "method" : "GET",
                  "name" : "spamusers",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mail" : {
                              "description" : "the receiving email",
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
            "path" : "/quarantine/spamusers",
            "text" : "spamusers"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get Spam Quarantine Status",
                  "method" : "GET",
                  "name" : "spamstatus",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "avgbytes" : {
                           "description" : "Average size of stored mails in bytes.",
                           "type" : "number"
                        },
                        "avgspam" : {
                           "description" : "Average spam level.",
                           "type" : "number"
                        },
                        "count" : {
                           "description" : "Number of stored mails.",
                           "type" : "integer"
                        },
                        "mbytes" : {
                           "description" : "Estimated disk space usage in MByte.",
                           "type" : "number"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/spamstatus",
            "text" : "spamstatus"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get a list of users with whitelist/blacklist setttings.",
                  "method" : "GET",
                  "name" : "quarusers",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mail" : {
                              "description" : "the receiving email",
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
            "path" : "/quarantine/quarusers",
            "text" : "quarusers"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get a list of quarantined spam mails in the given timeframe (default the last 24 hours) for the given user.",
                  "method" : "GET",
                  "name" : "spam",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot speficy this parameter, but it is required for all other roles.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Size of raw email.",
                              "type" : "integer"
                           },
                           "envelope_sender" : {
                              "description" : "SMTP envelope sender.",
                              "type" : "string"
                           },
                           "from" : {
                              "description" : "Header 'From' field.",
                              "type" : "string"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "type" : "string"
                           },
                           "receiver" : {
                              "description" : "Receiver email address",
                              "type" : "string"
                           },
                           "sender" : {
                              "description" : "Header 'Sender' field.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "spamlevel" : {
                              "description" : "Spam score.",
                              "type" : "number"
                           },
                           "subject" : {
                              "description" : "Header 'Subject' field.",
                              "type" : "string"
                           },
                           "time" : {
                              "description" : "Receive time stamp",
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/spam",
            "text" : "spam"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get a list of quarantined virus mails in the given timeframe (default the last 24 hours).",
                  "method" : "GET",
                  "name" : "virus",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Size of raw email.",
                              "type" : "integer"
                           },
                           "envelope_sender" : {
                              "description" : "SMTP envelope sender.",
                              "type" : "string"
                           },
                           "from" : {
                              "description" : "Header 'From' field.",
                              "type" : "string"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "type" : "string"
                           },
                           "receiver" : {
                              "description" : "Receiver email address",
                              "type" : "string"
                           },
                           "sender" : {
                              "description" : "Header 'Sender' field.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "subject" : {
                              "description" : "Header 'Subject' field.",
                              "type" : "string"
                           },
                           "time" : {
                              "description" : "Receive time stamp",
                              "type" : "integer"
                           },
                           "virusname" : {
                              "description" : "Virus name.",
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
            "path" : "/quarantine/virus",
            "text" : "virus"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get Virus Quarantine Status",
                  "method" : "GET",
                  "name" : "virusstatus",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "avgbytes" : {
                           "description" : "Average size of stored mails in bytes.",
                           "type" : "number"
                        },
                        "count" : {
                           "description" : "Number of stored mails.",
                           "type" : "integer"
                        },
                        "mbytes" : {
                           "description" : "Estimated disk space usage in MByte.",
                           "type" : "number"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/virusstatus",
            "text" : "virusstatus"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get email data. There is a special formatter called 'htmlmail' to get sanitized html view of the mail content (use the '/api2/htmlmail/quarantine/content' url).",
                  "method" : "GET",
                  "name" : "content",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "id" : {
                           "description" : "Unique ID",
                           "maxLength" : 40,
                           "pattern" : "C\\d+R\\d+",
                           "type" : "string"
                        },
                        "raw" : {
                           "default" : 0,
                           "description" : "Display 'raw' eml data. This is only used with the 'htmlmail' formatter.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "bytes" : {
                           "description" : "Size of raw email.",
                           "type" : "integer"
                        },
                        "content" : {
                           "description" : "Raw email data (first 4096 bytes). Useful for preview. NOTE: The  'htmlmail' formatter displays the whole email.",
                           "type" : "string"
                        },
                        "envelope_sender" : {
                           "description" : "SMTP envelope sender.",
                           "type" : "string"
                        },
                        "from" : {
                           "description" : "Header 'From' field.",
                           "type" : "string"
                        },
                        "header" : {
                           "description" : "Raw email header data.",
                           "type" : "string"
                        },
                        "id" : {
                           "description" : "Unique ID",
                           "type" : "string"
                        },
                        "receiver" : {
                           "description" : "Receiver email address",
                           "type" : "string"
                        },
                        "sender" : {
                           "description" : "Header 'Sender' field.",
                           "optional" : 1,
                           "type" : "string"
                        },
                        "spaminfo" : {
                           "description" : "Information about matched spam tests (name, score, desc, url).",
                           "type" : "array"
                        },
                        "spamlevel" : {
                           "description" : "Spam score.",
                           "type" : "number"
                        },
                        "subject" : {
                           "description" : "Header 'Subject' field.",
                           "type" : "string"
                        },
                        "time" : {
                           "description" : "Receive time stamp",
                           "type" : "integer"
                        }
                     },
                     "type" : "object"
                  }
               },
               "POST" : {
                  "description" : "Execute quarantine actions.",
                  "method" : "POST",
                  "name" : "action",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "action" : {
                           "description" : "Action - specify what you want to do with the mail.",
                           "enum" : [
                              "whitelist",
                              "blacklist",
                              "deliver",
                              "delete"
                           ],
                           "type" : "string"
                        },
                        "id" : {
                           "description" : "Unique ID",
                           "maxLength" : 40,
                           "pattern" : "C\\d+R\\d+",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/content",
            "text" : "content"
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
      "path" : "/quarantine",
      "text" : "quarantine"
   },
   {
      "children" : [
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "description" : "Detailed Contact Statistics.",
                        "method" : "GET",
                        "name" : "contactdetails",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "contact" : {
                                 "description" : "Contact email address.",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "day" : {
                                 "description" : "Day of month. Get statistics for a single day.",
                                 "maximum" : 31,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 31)"
                              },
                              "endtime" : {
                                 "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "filter" : {
                                 "description" : "Sender address filter.",
                                 "maxLength" : 512,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "month" : {
                                 "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                                 "maximum" : 12,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 12)"
                              },
                              "orderby" : {
                                 "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "starttime" : {
                                 "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "year" : {
                                 "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                                 "maximum" : 3000,
                                 "minimum" : 1900,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1900 - 3000)"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "blocked" : {
                                    "description" : "Mail was blocked.",
                                    "type" : "boolean"
                                 },
                                 "bytes" : {
                                    "description" : "Mail traffic (Bytes).",
                                    "type" : "number"
                                 },
                                 "sender" : {
                                    "description" : "Sender email.",
                                    "type" : "string"
                                 },
                                 "spamlevel" : {
                                    "description" : "Spam score.",
                                    "type" : "number"
                                 },
                                 "time" : {
                                    "description" : "Receive time stamp",
                                    "type" : "integer"
                                 },
                                 "virusinfo" : {
                                    "description" : "Virus name.",
                                    "optional" : 1,
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
                  "path" : "/statistics/contact/{contact}",
                  "text" : "{contact}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Contact Address Statistics.",
                  "method" : "GET",
                  "name" : "contact",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Contact address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "contact" : {
                              "description" : "Contact email.",
                              "type" : "string"
                           },
                           "count" : {
                              "description" : "Mail count.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "viruscount" : {
                              "description" : "Number of sent virus mails.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{contact}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/statistics/contact",
            "text" : "contact"
         },
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "description" : "Detailed Sender Statistics.",
                        "method" : "GET",
                        "name" : "senderdetails",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "day" : {
                                 "description" : "Day of month. Get statistics for a single day.",
                                 "maximum" : 31,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 31)"
                              },
                              "endtime" : {
                                 "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "filter" : {
                                 "description" : "Receiver address filter.",
                                 "maxLength" : 512,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "month" : {
                                 "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                                 "maximum" : 12,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 12)"
                              },
                              "orderby" : {
                                 "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "sender" : {
                                 "description" : "Sender email address.",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "starttime" : {
                                 "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "year" : {
                                 "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                                 "maximum" : 3000,
                                 "minimum" : 1900,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1900 - 3000)"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "blocked" : {
                                    "description" : "Mail was blocked.",
                                    "type" : "boolean"
                                 },
                                 "bytes" : {
                                    "description" : "Mail traffic (Bytes).",
                                    "type" : "number"
                                 },
                                 "receiver" : {
                                    "description" : "Receiver email.",
                                    "type" : "string"
                                 },
                                 "spamlevel" : {
                                    "description" : "Spam score.",
                                    "type" : "number"
                                 },
                                 "time" : {
                                    "description" : "Receive time stamp",
                                    "type" : "integer"
                                 },
                                 "virusinfo" : {
                                    "description" : "Virus name.",
                                    "optional" : 1,
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
                  "path" : "/statistics/sender/{sender}",
                  "text" : "{sender}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Sender Address Statistics.",
                  "method" : "GET",
                  "name" : "sender",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Sender address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Mail count.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "sender" : {
                              "description" : "Sender email.",
                              "type" : "string"
                           },
                           "viruscount" : {
                              "description" : "Number of sent virus mails.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{sender}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/statistics/sender",
            "text" : "sender"
         },
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "description" : "Detailed Receiver Statistics.",
                        "method" : "GET",
                        "name" : "receiverdetails",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "day" : {
                                 "description" : "Day of month. Get statistics for a single day.",
                                 "maximum" : 31,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 31)"
                              },
                              "endtime" : {
                                 "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "filter" : {
                                 "description" : "Sender address filter.",
                                 "maxLength" : 512,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "month" : {
                                 "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                                 "maximum" : 12,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 12)"
                              },
                              "orderby" : {
                                 "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "receiver" : {
                                 "description" : "Receiver email address.",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "pattern" : "(?:|[^\\s\\/\\@]+\\@[^\\s\\/\\@]+)",
                                 "type" : "string"
                              },
                              "starttime" : {
                                 "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "year" : {
                                 "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                                 "maximum" : 3000,
                                 "minimum" : 1900,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1900 - 3000)"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "blocked" : {
                                    "description" : "Mail was blocked.",
                                    "type" : "boolean"
                                 },
                                 "bytes" : {
                                    "description" : "Mail traffic (Bytes).",
                                    "type" : "number"
                                 },
                                 "sender" : {
                                    "description" : "Sender email.",
                                    "type" : "string"
                                 },
                                 "spamlevel" : {
                                    "description" : "Spam score.",
                                    "type" : "number"
                                 },
                                 "time" : {
                                    "description" : "Receive time stamp",
                                    "type" : "integer"
                                 },
                                 "virusinfo" : {
                                    "description" : "Virus name.",
                                    "optional" : 1,
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
                  "path" : "/statistics/receiver/{receiver}",
                  "text" : "{receiver}"
               }
            ],
            "info" : {
               "GET" : {
                  "description" : "Receiver Address Statistics.",
                  "method" : "GET",
                  "name" : "receiver",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Receiver address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Mail count.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "receiver" : {
                              "description" : "Sender email.",
                              "type" : "string"
                           },
                           "spamcount" : {
                              "description" : "Number of sent spam mails.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "viruscount" : {
                              "description" : "Number of sent virus mails.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{receiver}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/statistics/receiver",
            "text" : "receiver"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Mail Domains Statistics.",
                  "method" : "GET",
                  "name" : "domains",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "domain" : {
                              "description" : "Domain name.",
                              "type" : "string"
                           },
                           "mbytes_in" : {
                              "description" : "Incoming mail traffic (Mebibytes).",
                              "type" : "number"
                           },
                           "mbytes_out" : {
                              "description" : "Outgoing mail traffic (Mebibytes).",
                              "type" : "number"
                           },
                           "spamcount_in" : {
                              "description" : "Incoming spam mails.",
                              "type" : "number"
                           },
                           "spamcount_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "viruscount_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "viruscount_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/domains",
            "text" : "domains"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "General Mail Statistics.",
                  "method" : "GET",
                  "name" : "mail",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "avptime" : {
                           "description" : "Average mail processing time in seconds.",
                           "type" : "number"
                        },
                        "bounces_in" : {
                           "description" : "Incoming bounce mail count (sender = <>).",
                           "type" : "number"
                        },
                        "bounces_out" : {
                           "description" : "Outgoing bounce mail count (sender = <>).",
                           "type" : "number"
                        },
                        "bytes_in" : {
                           "description" : "Incoming mail traffic (bytes).",
                           "type" : "number"
                        },
                        "bytes_out" : {
                           "description" : "Outgoing mail traffic (bytes).",
                           "type" : "number"
                        },
                        "count" : {
                           "description" : "Overall mail count (in and out).",
                           "type" : "number"
                        },
                        "count_in" : {
                           "description" : "Incoming mail count.",
                           "type" : "number"
                        },
                        "count_out" : {
                           "description" : "Outgoing mail count.",
                           "type" : "number"
                        },
                        "glcount" : {
                           "description" : "Number of greylisted mails.",
                           "type" : "number"
                        },
                        "junk_in" : {
                           "description" : "Incoming junk mail count (viruscount_in + spamcount_in + glcount + spfcount).",
                           "type" : "number"
                        },
                        "junk_out" : {
                           "description" : "Outgoing junk mail count (viruscount_out + spamcount_out).",
                           "type" : "number"
                        },
                        "spamcount_in" : {
                           "description" : "Incoming spam mails.",
                           "type" : "number"
                        },
                        "spamcount_out" : {
                           "description" : "Outgoing spam mails.",
                           "type" : "number"
                        },
                        "spfcount" : {
                           "description" : "Mails rejected by SPF.",
                           "type" : "number"
                        },
                        "viruscount_in" : {
                           "description" : "Number of incoming virus mails.",
                           "type" : "number"
                        },
                        "viruscount_out" : {
                           "description" : "Number of outgoing virus mails.",
                           "type" : "number"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/mail",
            "text" : "mail"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Mail Count Statistics.",
                  "method" : "GET",
                  "name" : "recent",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "hours" : {
                           "default" : 12,
                           "description" : "How many hours you want to get",
                           "maximum" : 24,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 24)"
                        },
                        "timespan" : {
                           "default" : 1800,
                           "description" : "The Timespan for one datapoint (in seconds)",
                           "maximum" : 1800,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 1800)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes_in" : {
                              "description" : "Number of incoming bytes mails.",
                              "type" : "number"
                           },
                           "bytes_out" : {
                              "description" : "Number of outgoing bytes mails.",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Overall mail count (in and out).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Time index.",
                              "type" : "integer"
                           },
                           "spam" : {
                              "description" : "Overall spam mail count (in and out).",
                              "type" : "number"
                           },
                           "spam_in" : {
                              "description" : "Incoming spam mails (spamcount_in + glcount + spfcount).",
                              "type" : "number"
                           },
                           "spam_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "time" : {
                              "description" : "Time (Unix epoch).",
                              "type" : "integer"
                           },
                           "timespan" : {
                              "description" : "Timespan in seconds for one data point",
                              "type" : "number"
                           },
                           "virus_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "virus_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/recent",
            "text" : "recent"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Top recent Mail Receivers (including spam)",
                  "method" : "GET",
                  "name" : "recentreceivers",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "hours" : {
                           "default" : 12,
                           "description" : "How many hours you want to get",
                           "maximum" : 24,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 24)"
                        },
                        "limit" : {
                           "default" : 5,
                           "description" : "The maximum number of receivers to return.",
                           "maximum" : 50,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 50)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "The count of incoming not blocked E-Mails",
                              "type" : "integer"
                           },
                           "receiver" : {
                              "description" : "The receiver",
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
            "path" : "/statistics/recentreceivers",
            "text" : "recentreceivers"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Mail Count Statistics.",
                  "method" : "GET",
                  "name" : "mailcount",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "timespan" : {
                           "default" : 3600,
                           "description" : "Return Mails/<timespan>, where <timespan> is specified in seconds.",
                           "maximum" : 31622400,
                           "minimum" : 3600,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3600 - 31622400)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bounces_in" : {
                              "description" : "Incoming bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "bounces_out" : {
                              "description" : "Outgoing bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Overall mail count (in and out).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Time index.",
                              "type" : "integer"
                           },
                           "spamcount_in" : {
                              "description" : "Incoming spam mails (spamcount_in + glcount + spfcount).",
                              "type" : "number"
                           },
                           "spamcount_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "time" : {
                              "description" : "Time (Unix epoch).",
                              "type" : "integer"
                           },
                           "viruscount_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "viruscount_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/mailcount",
            "text" : "mailcount"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get Statistics about detected Viruses.",
                  "method" : "GET",
                  "name" : "virus",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "Detection count.",
                              "type" : "integer"
                           },
                           "name" : {
                              "description" : "Virus name.",
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
            "path" : "/statistics/virus",
            "text" : "virus"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get the count of spam mails grouped by spam score. Count for score 10 includes mails with spam score > 10.",
                  "method" : "GET",
                  "name" : "spamscores",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "Detection count.",
                              "type" : "integer"
                           },
                           "level" : {
                              "description" : "Spam level.",
                              "type" : "string"
                           },
                           "ratio" : {
                              "description" : "Portion of overall mail count.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/spamscores",
            "text" : "spamscores"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Get the count of spam mails grouped by spam score. Count for score 10 includes mails with spam score > 10.",
                  "method" : "GET",
                  "name" : "maildistribution",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bounces_in" : {
                              "description" : "Incoming bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "bounces_out" : {
                              "description" : "Outgoing bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Overall mail count (in and out).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Hour (0-23).",
                              "type" : "integer"
                           },
                           "spamcount_in" : {
                              "description" : "Incoming spam mails (spamcount_in + glcount + spfcount).",
                              "type" : "number"
                           },
                           "spamcount_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "viruscount_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "viruscount_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/maildistribution",
            "text" : "maildistribution"
         },
         {
            "info" : {
               "GET" : {
                  "description" : "Mail RBL Count Statistics.",
                  "method" : "GET",
                  "name" : "rblcount",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "timespan" : {
                           "default" : 3600,
                           "description" : "Return RBL rejects/<timespan>, where <timespan> is specified in seconds.",
                           "maximum" : 31622400,
                           "minimum" : 3600,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3600 - 31622400)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "RBL recject count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Time index.",
                              "type" : "integer"
                           },
                           "time" : {
                              "description" : "Time (Unix epoch).",
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/rblcount",
            "text" : "rblcount"
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
               "check" : [
                  "admin",
                  "qmanager",
                  "audit"
               ]
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
      "path" : "/statistics",
      "text" : "statistics"
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

