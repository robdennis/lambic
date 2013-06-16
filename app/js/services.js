'use strict';

angular.module('lambic.services', [])
    .factory('PoolService', function() {
        return {
            get: function() {
                return  [{
                    "heuristics": {
                        "always_kick": {
                            "mana_cost": "{G}{G}",
                            "converted_mana_cost": 2
                        },
                        "caring_about_spell_colors_affects_color": {
                            "colors": [
                                "Green"
                            ]
                        },
                        "always_kick_creatures": {
                            "mana_cost": "{G}{G}",
                            "converted_mana_cost": 2
                        },
                        "caring_about_controlling_land_types_affects_color": {
                            "colors": [
                                "Green"
                            ]
                        },
                        "caring_about_controlling_colored_permanents_affects_color": {
                            "colors": [
                                "Green"
                            ]
                        }
                    },
                    "name": "Vines of Vastwood",
                    "colors": [
                        "Green"
                    ],
                    "mana_cost": "{G}",
                    "types": [
                        "Instant"
                    ],
                    "converted_mana_cost": 1
                },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Nantuko Vigilante",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Desertion",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "\u00c6ther Vial",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "always_kick": {
                                "mana_cost": "{4}{G}{G}",
                                "converted_mana_cost": 6
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "always_kick_creatures": {
                                "mana_cost": "{4}{G}{G}",
                                "converted_mana_cost": 6
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Mold Shambler",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Day of Judgment",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Kird Ape",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Eternal Dragon",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{5}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "always_kick": {
                                "mana_cost": "{3}{R}{R}",
                                "converted_mana_cost": 5
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "always_kick_creatures": {
                                "mana_cost": "{3}{R}{R}",
                                "converted_mana_cost": 5
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Skizzik",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Lion's Eye Diamond",
                        "colors": [],
                        "mana_cost": "{0}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Pithing Needle",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Stifle",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Overgrown Tomb",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Thirst for Knowledge",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "All Is Dust",
                        "colors": [],
                        "mana_cost": "{7}",
                        "types": [
                            "Tribal",
                            "Sorcery"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Lu Xun, Scholar General",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Dauthi Slayer",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Overgrown Battlement",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Ambition's Cost",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Watery Grave",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Mesmeric Fiend",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Wall of Reverence",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Akroma, Angel of Wrath",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{5}{W}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Hallowed Burial",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Loyal Retainers",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "living_weapon_means_creature": {
                                "types": [
                                    "Artifact",
                                    "Creature"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Batterskull",
                        "colors": [],
                        "mana_cost": "{5}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Spell Pierce",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Glen Elendra Archmage",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Reanimate",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Hellspark Elemental",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Moldervine Cloak",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Stunted Growth",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Wood Elves",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Weathered Wayfarer",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Hystrodon",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{4}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Platinum Angel",
                        "colors": [],
                        "mana_cost": "{7}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Akroma, Angel of Fury",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{5}{R}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Isolated Chapel",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Prophetic Bolt",
                        "colors": [
                            "Blue",
                            "Red"
                        ],
                        "mana_cost": "{3}{U}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Buried Alive",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Kjeldoran Outpost",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Urabrask the Hidden",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Explore",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Chandra Nalaar",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{R}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Creakwood Liege",
                        "colors": [
                            "Black",
                            "Green"
                        ],
                        "mana_cost": "{1}{B/G}{B/G}{B/G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Sprouting Thrinax",
                        "colors": [
                            "Black",
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{B}{R}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "White",
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Quirion Dryad",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Umezawa's Jitte",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Vampiric Tutor",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Garruk, Primal Hunter",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}{G}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Silent Specter",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Oona's Prowler",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Power Sink",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{X}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Leonin Relic-Warder",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Daybreak Ranger",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Frenzied Goblin",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Control Magic",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Vindicate",
                        "colors": [
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{1}{W}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Counterspell",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Reveillark",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{4}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Rude Awakening",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{4}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Remand",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Rofellos, Llanowar Emissary",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Breeding Pool",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Celestial Purge",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Dauthi Marauder",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Burning of Xinye",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Innocent Blood",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Emeria Angel",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Inquisition of Kozilek",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Mikaeus, the Lunarch",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{X}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Acidic Slime",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Rorix Bladewing",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Natural Order",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Molten-Tail Masticore",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Aeon Chronicler",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Graveborn Muse",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "suspend_as_cmc": {
                                "mana_cost": "{0}",
                                "converted_mana_cost": 0
                            }
                        },
                        "name": "Lotus Bloom",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Wild Nacatl",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Oust",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Sulfuric Vortex",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Nightscape Familiar",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Taurean Mauler",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Tombstalker",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{6}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Aftershock",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Tangle Wire",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ember Hauler",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Thunderblust",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "White Knight",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mimic Vat",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Capsize",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Guide",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Strip Mine",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Old Man of the Sea",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Memory Lapse",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mox Diamond",
                        "colors": [],
                        "mana_cost": "{0}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Blade Splicer",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Vampire Hexmage",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Recurring Nightmare",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Nezumi Shortfang",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Fyndhorn Elves",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Bone Shredder",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "off_color_flashback_is_gold": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Ray of Revelation",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Geralf's Messenger",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Volcanic Hammer",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Geist of Saint Traft",
                        "colors": [
                            "Blue",
                            "White"
                        ],
                        "mana_cost": "{1}{W}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Neurok Commando",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Gilded Lotus",
                        "colors": [],
                        "mana_cost": "{5}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Liliana Vess",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Daze",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Korlash, Heir to Blackblade",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Enlightened Tutor",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Seal of Primordium",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Iona, Shield of Emeria",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{6}{W}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 9
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sword of War and Peace",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Huntmaster of the Fells",
                        "colors": [
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "suspend_as_cmc": {
                                "mana_cost": "{1}{U}",
                                "converted_mana_cost": 2
                            }
                        },
                        "name": "Riftwing Cloudskate",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Green Sun's Zenith",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{X}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Rishadan Port",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Ohran Viper",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Chandra's Phoenix",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Beast Within",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "suspend_as_cmc": {
                                "mana_cost": "{U}",
                                "converted_mana_cost": 1
                            }
                        },
                        "name": "Ancestral Vision",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": null,
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": null,
                        "name": "Leatherback Baloth",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Epochrasite",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Show and Tell",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Scorned Villager",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Empty the Warrens",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Ranger of Eos",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Devastating Dreams",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Angelic Destiny",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Turnabout",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "use_cycling_cost_as_mana_cost_for_triggered_abilities": {
                                "mana_cost": "{1}{W}",
                                "converted_mana_cost": 2
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Renewed Faith",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Trinket Mage",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Grand Arbiter Augustin IV",
                        "colors": [
                            "Blue",
                            "White"
                        ],
                        "mana_cost": "{2}{W}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Legionnaire",
                        "colors": [
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{R}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Steppe Lynx",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Blue Elemental Blast",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Shelldock Isle",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Masticore",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Entomb",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Future Sight",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Sea Gate Oracle",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Venser, Shaper Savant",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "\u00c6ther Adept",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Visara the Dreadful",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Boggart Ram-Gang",
                        "colors": [
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{R/G}{R/G}{R/G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Hero of Oxid Ridge",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Exalted Angel",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{4}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Barbarian Ring",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Sarkhan the Mad",
                        "colors": [
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{3}{B}{R}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Chameleon Colossus",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Kokusho, the Evening Star",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Mana Leak",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "always_kick": {
                                "mana_cost": "{B}{B}{B}",
                                "converted_mana_cost": 3
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "always_kick_creatures": {
                                "mana_cost": "{B}{B}{B}",
                                "converted_mana_cost": 3
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Gatekeeper of Malakir",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Brine Elemental",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Mulldrifter",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Fire Ambush",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Phantasmal Bear",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Karakas",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Abyssal Persecutor",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "City of Traitors",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": null,
                        "name": "Scrubland",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Grim Lavamancer",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Powder Keg",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Precursor Golem",
                        "colors": [],
                        "mana_cost": "{5}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Cloudgoat Ranger",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Absorb",
                        "colors": [
                            "Blue",
                            "White"
                        ],
                        "mana_cost": "{W}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Dismiss",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Elspeth Tirel",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Enchantment",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sarcomancy",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Tinker",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Burrenton Forge-Tender",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Opposition",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Siege-Gang Commander",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "always_kick_creatures": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ],
                                "mana_cost": "{3}{B}{R}{G}",
                                "converted_mana_cost": 6
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "always_kick": {
                                "colors": [
                                    "Black",
                                    "Green",
                                    "Red"
                                ],
                                "mana_cost": "{3}{B}{R}{G}",
                                "converted_mana_cost": 6
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "off_color_kicker_is_gold": {
                                "colors": [
                                    "Black",
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Thunderscape Battlemage",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "phyrexian_always_pays_life_except_for_abilities": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Spellskite",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": null,
                        "name": "Badlands",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Dream Halls",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Nostalgic Dreams",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Cold-Eyed Selkie",
                        "colors": [
                            "Blue",
                            "Green"
                        ],
                        "mana_cost": "{1}{G/U}{G/U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Plague Sliver",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Avenger of Zendikar",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{5}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Searing Blaze",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Serendib Efreet",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Putrefy",
                        "colors": [
                            "Black",
                            "Green"
                        ],
                        "mana_cost": "{1}{B}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Ethersworn Canonist",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Eternal Witness",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Devoted Druid",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "phyrexian_always_pays_life_except_for_abilities": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Hex Parasite",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Slith Firewalker",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": null,
                        "name": "Savannah",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Opportunity",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Price of Progress",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Living Death",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Miscalculation",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Steam Vents",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Deprive",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Condemn",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Koth of the Hammer",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{R}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Basilisk Collar",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Preordain",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Scalding Tarn",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "use_cycling_cost_as_mana_cost_for_triggered_abilities": {
                                "mana_cost": "{X}{2}{W}",
                                "converted_mana_cost": null
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Decree of Justice",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{X}{X}{2}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Diabolic Servitude",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Kitchen Finks",
                        "colors": [
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{1}{G/W}{G/W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Falkenrath Aristocrat",
                        "colors": [
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{2}{B}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Aven Mindcensor",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Braids, Cabal Minion",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Cursed Scroll",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": null,
                        "name": "Underground Sea",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Fertile Ground",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Frantic Search",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Beacon of Destruction",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Nevinyrral's Disk",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Maze of Ith",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Phyrexian Crusader",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Plow Under",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Eight-and-a-Half-Tails",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Troll Ascetic",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Broodmate Dragon",
                        "colors": [
                            "Black",
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{3}{B}{R}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "suspend_as_cmc": {
                                "mana_cost": "{R}",
                                "converted_mana_cost": 1
                            }
                        },
                        "name": "Rift Bolt",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Shrine of Burning Rage",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Staggershock",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Death Cloud",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{X}{B}{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Ankh of Mishra",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Gifts Ungiven",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Soltari Priest",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Primal Command",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Eldrazi Monument",
                        "colors": [],
                        "mana_cost": "{5}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Black",
                                    "Green"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Grim Backwoods",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": null,
                        "name": "Elite Vanguard",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "always_kick_creatures": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ],
                                "mana_cost": "{4}{W}{U}",
                                "converted_mana_cost": 6
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "always_kick": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ],
                                "mana_cost": "{4}{W}{U}",
                                "converted_mana_cost": 6
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "off_color_kicker_is_gold": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Dismantling Blow",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Soltari Champion",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Time Warp",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Bloodstained Mire",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Intuition",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "off_color_flashback_is_gold": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Momentary Blink",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Grave Titan",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Dark Ritual",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Scroll Rack",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Flashfreeze",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Figure of Destiny",
                        "colors": [
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{R/W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Liliana of the Veil",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}{B}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "phyrexian_always_pays_life": {
                                "colors": [],
                                "mana_cost": "{3}",
                                "converted_mana_cost": 3
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "phyrexian_always_pays_life_except_for_abilities": {
                                "colors": [
                                    "Green"
                                ],
                                "mana_cost": "{3}",
                                "converted_mana_cost": 3
                            }
                        },
                        "name": "Birthing Pod",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G/P}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Tainted Pact",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ajani Vengeant",
                        "colors": [
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{W}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Great Sable Stag",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Ponder",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ruhan of the Fomori",
                        "colors": [
                            "Blue",
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{W}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Grim Monolith",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Hell's Thunder",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ball Lightning",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Cloudthresher",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Fellwar Stone",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Paladin en-Vec",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Phyrexian Revoker",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Disenchant",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Phyrexian Obliterator",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Genesis",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{4}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Deep Analysis",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Loyal Cathar",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mindslaver",
                        "colors": [],
                        "mana_cost": "{6}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Genju of the Spires",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Carnophage",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Chandra, the Firebrand",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Life from the Loam",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Heartbeat of Spring",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Mirror Entity",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Solemn Simulacrum",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Repeal",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{X}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Mirari's Wake",
                        "colors": [
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Nicol Bolas, Planeswalker",
                        "colors": [
                            "Blue",
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{4}{U}{B}{B}{R}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Zo-Zu the Punisher",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Phyrexian Processor",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Honor of the Pure",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sinkhole",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Edric, Spymaster of Trest",
                        "colors": [
                            "Blue",
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Genesis Wave",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{X}{G}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Bogardan Hellkite",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{6}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Vorapede",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Red Elemental Blast",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "always_kick": {
                                "mana_cost": "{2}{R}{R}",
                                "converted_mana_cost": 4
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "always_kick_creatures": {
                                "mana_cost": "{2}{R}{R}",
                                "converted_mana_cost": 4
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Ruinblaster",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Necromancy",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sensei's Divining Top",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Brooding Saurian",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Cryptic Command",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Corpse Dance",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Jushi Apprentice",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Rootbound Crag",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Arc Trail",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Flickerwisp",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Terastodon",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{6}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Inferno Titan",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Blood Crypt",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Wasteland",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Blistering Firecat",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Mystic Snake",
                        "colors": [
                            "Blue",
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Mind's Desire",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Magus of the Tabernacle",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Skithiryx, the Blight Dragon",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Gathan Raiders",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Blastoderm",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Dauthi Horror",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Lead the Stampede",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Phyrexian Negator",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Maelstrom Pulse",
                        "colors": [
                            "Black",
                            "Green"
                        ],
                        "mana_cost": "{1}{B}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Fathom Seer",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Jungle Lion",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Lotus Petal",
                        "colors": [],
                        "mana_cost": "{0}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Arc Lightning",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Path to Exile",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Hokori, Dust Drinker",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Wrath of God",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Seething Song",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Shriekmaw",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Tradewind Rider",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Cabal Coffers",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Primordial Hydra",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{X}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Firestorm",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Skullclamp",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Survival of the Fittest",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Naturalize",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Waterfront Bouncer",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Yavimaya Hollow",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Doom Blade",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Ninja of the Deep Hours",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Land Tax",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Welder",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Kargan Dragonlord",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Armageddon",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Skeletal Vampire",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sacred Foundry",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Lotus Cobra",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Catastrophe",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{4}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Memory Jar",
                        "colors": [],
                        "mana_cost": "{5}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Venser, the Sojourner",
                        "colors": [
                            "Blue",
                            "White"
                        ],
                        "mana_cost": "{3}{W}{U}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Harmonize",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Swords to Plowshares",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Firebolt",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sphinx of the Steel Wind",
                        "colors": [
                            "Blue",
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{5}{W}{U}{B}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Opt",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Manriki-Gusari",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Nekrataal",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Negate",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Calciderm",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mind Stone",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Arid Mesa",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Skeletal Scrying",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{X}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Everflowing Chalice",
                        "colors": [],
                        "mana_cost": "{0}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Glorious Anthem",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Vulshok Refugee",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Celestial Colonnade",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Woodfall Primus",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{5}{G}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Smash to Smithereens",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Elves of Deep Shadow",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Keldon Champion",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Treachery",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Earthquake",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{X}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Mirran Crusader",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "suspend_as_cmc": {
                                "mana_cost": "{G}",
                                "converted_mana_cost": 1
                            }
                        },
                        "name": "Search for Tomorrow",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": null,
                        "name": "Tropical Island",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sundering Titan",
                        "colors": [],
                        "mana_cost": "{8}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Kami of Ancient Law",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Oblivion Ring",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Parallax Wave",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Tumble Magnet",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Pyrokinesis",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Dark Confidant",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Vault of the Archangel",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Qasali Pridemage",
                        "colors": [
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{G}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Rhox War Monk",
                        "colors": [
                            "Blue",
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{G}{W}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Upheaval",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Xiahou Dun, the One-Eyed",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Unearth",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "phyrexian_always_pays_life": {
                                "colors": [],
                                "mana_cost": "{2}",
                                "converted_mana_cost": 2
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Porcelain Legionnaire",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W/P}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Stirring Wildwood",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Force of Will",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Chain Lightning",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Stromkirk Noble",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Slaughter Pact",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{0}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Consecrated Sphinx",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "always_kick_creatures": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ],
                                "mana_cost": "{2}{W}{R}{G}",
                                "converted_mana_cost": 5
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "always_kick": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ],
                                "mana_cost": "{2}{W}{R}{G}",
                                "converted_mana_cost": 5
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "off_color_kicker_is_gold": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Thornscape Battlemage",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Havengul Lich",
                        "colors": [
                            "Blue",
                            "Black"
                        ],
                        "mana_cost": "{3}{U}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Teetering Peaks",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Priest of Urabrask",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Prismatic Lens",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Enclave Cryptologist",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "suspend_as_cmc": {
                                "mana_cost": "{R}",
                                "converted_mana_cost": 1
                            }
                        },
                        "name": "Greater Gargadon",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{9}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 10
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Bituminous Blast",
                        "colors": [
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{3}{B}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": null,
                        "name": "Tundra",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Thelonite Hermit",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Fire // Ice",
                        "colors": [
                            "Blue",
                            "Red"
                        ],
                        "mana_cost": "{1}{R} // {1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": -1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Kodama's Reach",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Undermine",
                        "colors": [
                            "Blue",
                            "Black"
                        ],
                        "mana_cost": "{U}{U}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "off_color_flashback_is_gold": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Forbidden Alchemy",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sword of Fire and Ice",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Ajani Goldmane",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Worn Powerstone",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Chaos Warp",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Obliterate",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{6}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 8
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Arbor Elf",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Force Spike",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Loam Lion",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Enchantment",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Awakening Zone",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sphere of the Suns",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Llanowar Elves",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Oracle of Mul Daya",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Tidings",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Baneslayer Angel",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Basalt Monolith",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "off_color_flashback_is_gold": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ancient Grudge",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Mortify",
                        "colors": [
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{1}{W}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Relic of Progenitus",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Moment's Peace",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Worship",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Gaea's Cradle",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Isochron Scepter",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Mentor of the Meek",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": null,
                        "name": "Bayou",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Treetop Village",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Fiend Hunter",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Restock",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Thornling",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Drogskol Reaver",
                        "colors": [
                            "Blue",
                            "White"
                        ],
                        "mana_cost": "{5}{W}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Nantuko Shade",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Stonecloaker",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sheoldred, Whispering One",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{5}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Black Vise",
                        "colors": [],
                        "mana_cost": "{1}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Frost Titan",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Silver Knight",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Black Knight",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Ideas Unbound",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Primeval Titan",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{4}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Ancient Tomb",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Enchantment",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Luminarch Ascension",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Zombie Cutthroat",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Mystical Tutor",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Thoughtseize",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Magma Jet",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Increasing Devotion",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Wooded Foothills",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Vinelasher Kudzu",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Hypnotic Specter",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Necropotence",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Thawing Glaciers",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Giant Solifuge",
                        "colors": [
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{2}{R/G}{R/G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Voidmage Prodigy",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Agony Warp",
                        "colors": [
                            "Blue",
                            "Black"
                        ],
                        "mana_cost": "{U}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Keldon Marauders",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Jace Beleren",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": null,
                        "name": "Volcanic Island",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Stormblood Berserker",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Soltari Monk",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Forbid",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Tectonic Edge",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sword of Light and Shadow",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Orcish Lumberjack",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sunpetal Grove",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Tribal",
                                    "Enchantment",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Bitterblossom",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Tribal",
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Electrolyze",
                        "colors": [
                            "Blue",
                            "Red"
                        ],
                        "mana_cost": "{1}{U}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Garruk Relentless",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Behemoth Sledge",
                        "colors": [
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{W}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Cultivate",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Cruel Ultimatum",
                        "colors": [
                            "Blue",
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{U}{U}{B}{B}{B}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Pulse of the Forge",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ravenous Baboons",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Yavimaya Elder",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Tolaria West",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Sneak Attack",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Narcolepsy",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Creeping Tar Pit",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Puppeteer Clique",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mutavault",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Spiritmonger",
                        "colors": [
                            "Black",
                            "Green"
                        ],
                        "mana_cost": "{3}{B}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Disfigure",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Molten Rain",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Void",
                        "colors": [
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{3}{B}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "always_kick": {
                                "mana_cost": "{2}{U}{U}",
                                "converted_mana_cost": 4
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "always_kick_creatures": {
                                "mana_cost": "{2}{U}{U}",
                                "converted_mana_cost": 4
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Into the Roil",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Yosei, the Morning Star",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{4}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Hero of Bladehold",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Duress",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Pernicious Deed",
                        "colors": [
                            "Black",
                            "Green"
                        ],
                        "mana_cost": "{1}{B}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Student of Warfare",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            }
                        },
                        "name": "Augury Adept",
                        "colors": [
                            "Blue",
                            "White"
                        ],
                        "mana_cost": "{1}{W/U}{W/U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Doran, the Siege Tower",
                        "colors": [
                            "Black",
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{B}{G}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Man-o'-War",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Noble Hierarch",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Nezumi Graverobber",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Mana Tithe",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Wispmare",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Jokulhaups",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Countryside Crusher",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Esper Charm",
                        "colors": [
                            "Blue",
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{W}{U}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Niv-Mizzet, the Firemind",
                        "colors": [
                            "Blue",
                            "Red"
                        ],
                        "mana_cost": "{2}{U}{U}{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Bane of the Living",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Hymn to Tourach",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Bloodbraid Elf",
                        "colors": [
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{2}{R}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Stomping Ground",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Myr Battlesphere",
                        "colors": [],
                        "mana_cost": "{7}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Vengevine",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "phyrexian_always_pays_life": {
                                "colors": [],
                                "mana_cost": "{3}",
                                "converted_mana_cost": 3
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Phyrexian Metamorph",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U/P}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Night's Whisper",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Rancor",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Raging Ravine",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Flooded Strand",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sword of Feast and Famine",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Thran Dynamo",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Karn Liberated",
                        "colors": [],
                        "mana_cost": "{7}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Etched Oracle",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Tooth and Nail",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{5}{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Lodestone Golem",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Realm Razer",
                        "colors": [
                            "White",
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{G}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "assume_on_color_cmc_for_mono_color_hybrids": {
                                "converted_mana_cost": 3
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Spectral Procession",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2/W}{2/W}{2/W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Garruk Wildspeaker",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Profane Command",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{X}{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Ulamog, the Infinite Gyre",
                        "colors": [],
                        "mana_cost": "{11}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 11
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Vedalken Shackles",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Dissipate",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Krosan Grip",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Farseek",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Palinchron",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{5}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Go for the Throat",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Gamble",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Godless Shrine",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Academy Rector",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Keiga, the Tide Star",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{5}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Journey to Nowhere",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Strangleroot Geist",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Kira, Great Glass-Spinner",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Master of the Wild Hunt",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Yawgmoth's Will",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Volcanic Fallout",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Fireblast",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Call of the Herd",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Demonic Tutor",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Obstinate Baloth",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "living_weapon_means_creature": {
                                "types": [
                                    "Artifact",
                                    "Creature"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mortarpod",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sword of Body and Mind",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Knight of the Reliquary",
                        "colors": [
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Pyroclasm",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Mind Shatter",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{X}{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Lavaclaw Reaches",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Wheel of Fortune",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Hallowed Fountain",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Woodland Cemetery",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Banefire",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{X}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Goon",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Phantom Centaur",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Voidslime",
                        "colors": [
                            "Blue",
                            "Green"
                        ],
                        "mana_cost": "{G}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Call the Skybreaker",
                        "colors": [
                            "Blue",
                            "Red"
                        ],
                        "mana_cost": "{5}{U/R}{U/R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Faith's Fetters",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Damnation",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Whipcorder",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Balance",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Wickerbough Elder",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Pact of Negation",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{0}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Vesuvan Shapeshifter",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Academy Ruins",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Stillmoon Cavalier",
                        "colors": [
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{1}{W/B}{W/B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Martial Coup",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{X}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Legacy's Allure",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}{U}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Ravages of War",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": null,
                        "name": "Isamaru, Hound of Konda",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Indrik Stomphowler",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{4}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Vendilion Clique",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Laquatus's Champion",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Stonewood Invocation",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Terror",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Cursecatcher",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Brainstorm",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Channel",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Windbrisk Heights",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Phyrexian Arena",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Shadowmage Infiltrator",
                        "colors": [
                            "Blue",
                            "Black"
                        ],
                        "mana_cost": "{1}{U}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Firespout",
                        "colors": [
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{2}{R/G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Sakura-Tribe Elder",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Lightning Helix",
                        "colors": [
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{R}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Torch Fiend",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Pulse of the Fields",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Sun Titan",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{4}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Spectral Lynx",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Tendrils of Agony",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Tormod's Crypt",
                        "colors": [],
                        "mana_cost": "{0}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Elspeth, Knight-Errant",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Coldsteel Heart",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Diregraf Ghoul",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Joraga Treespeaker",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Bloodghast",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Angel of Despair",
                        "colors": [
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{3}{W}{W}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Despise",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Wardriver",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Phyrexian Rager",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Terminate",
                        "colors": [
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{B}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Engineered Explosives",
                        "colors": [],
                        "mana_cost": "{X}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Sphinx of Jwar Isle",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Time Spiral",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Ink-Eyes, Servant of Oni",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{4}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Wall of Omens",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Thalia, Guardian of Thraben",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Windswept Heath",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Court Hussar",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Destructive Force",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{5}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Wildfire",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Firemane Angel",
                        "colors": [
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{3}{R}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Crucible of Worlds",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Devil's Play",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{X}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Mother of Runes",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Bant Charm",
                        "colors": [
                            "Blue",
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{G}{W}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Lake of the Dead",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Tin Street Hooligan",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Smokestack",
                        "colors": [],
                        "mana_cost": "{4}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Drowned Catacomb",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Summoning Trap",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{4}{G}{G}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Vampire Lacerator",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Grimgrin, Corpse-Born",
                        "colors": [
                            "Blue",
                            "Black"
                        ],
                        "mana_cost": "{3}{U}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Jackal Pup",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Reckless Charge",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Simic Sky Swallower",
                        "colors": [
                            "Blue",
                            "Green"
                        ],
                        "mana_cost": "{5}{G}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Skinrender",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Cataclysm",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Psychatog",
                        "colors": [
                            "Blue",
                            "Black"
                        ],
                        "mana_cost": "{1}{U}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Impulse",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Tithe",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "off_color_flashback_is_gold": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Sorcery",
                                    "Creature"
                                ]
                            }
                        },
                        "name": "Lingering Souls",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{2}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Lightning Bolt",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Incinerate",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Stupor",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{2}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Palladium Myr",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Nucklavee",
                        "colors": [
                            "Blue",
                            "Red"
                        ],
                        "mana_cost": "{4}{U/R}{U/R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sign in Blood",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Deathmark",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Avalanche Riders",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Putrid Leech",
                        "colors": [
                            "Black",
                            "Green"
                        ],
                        "mana_cost": "{B}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Verdant Catacombs",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Grafted Wargear",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Gravecrawler",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Spikeshot Elder",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Wall of Roots",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": null,
                        "name": "Savannah Lions",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Jace, the Mind Sculptor",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Deranged Hermit",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{3}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": null,
                        "name": "Taiga",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Lightning Greaves",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "phyrexian_always_pays_life": {
                                "colors": [],
                                "mana_cost": "{1}",
                                "converted_mana_cost": 1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Dismember",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B/P}{B/P}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Marsh Flats",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Compulsive Research",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Imperial Seal",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Coalition Relic",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sorin Markov",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}{B}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Pristine Talisman",
                        "colors": [],
                        "mana_cost": "{3}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Loxodon Hierarch",
                        "colors": [
                            "White",
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Looter il-Kor",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Flametongue Kavu",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Gideon's Lawkeeper",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Chrome Mox",
                        "colors": [],
                        "mana_cost": "{0}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Thieving Magpie",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Brimstone Volley",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Pillage",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Elesh Norn, Grand Cenobite",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{5}{W}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 7
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Tidehollow Sculler",
                        "colors": [
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{W}{B}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Birds of Paradise",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Essence Scatter",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Ratchet Bomb",
                        "colors": [],
                        "mana_cost": "{2}",
                        "types": [
                            "Artifact"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Stoneforge Mystic",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{1}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Gideon Jura",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Careful Consideration",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Mishra's Factory",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Sylvan Library",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Werebear",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Ghitu Encampment",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "phyrexian_always_pays_life": {
                                "colors": [],
                                "mana_cost": "{3}",
                                "converted_mana_cost": 3
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Act of Aggression",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{3}{R/P}{R/P}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Animate Dead",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Rampant Growth",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Makeshift Mannequin",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Akroma's Vengeance",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{4}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Kozilek, Butcher of Truth",
                        "colors": [],
                        "mana_cost": "{10}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 10
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Mogg War Marshal",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "token_spells_are_creatures": {
                                "types": [
                                    "Enchantment",
                                    "Creature"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Goblin Trenches",
                        "colors": [
                            "White",
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{W}",
                        "types": [
                            "Enchantment"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Fact or Fiction",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{3}{U}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Consuming Vapors",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Dragonskull Summit",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Rolling Earthquake",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{X}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "activated_ability_costs_affect_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Volrath's Stronghold",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Wake Thrasher",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Thrun, the Last Troll",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{2}{G}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Sower of Temptation",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{2}{U}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Misty Rainforest",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Exhume",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White",
                                    "Black"
                                ]
                            }
                        },
                        "name": "Sorin, Lord of Innistrad",
                        "colors": [
                            "White",
                            "Black"
                        ],
                        "mana_cost": "{2}{W}{B}",
                        "types": [
                            "Planeswalker"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Hinterland Harbor",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": null,
                        "name": "Woolly Thoctar",
                        "colors": [
                            "White",
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{R}{G}{W}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Tarmogoyf",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Sulfur Falls",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Vampire Nighthawk",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{1}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue",
                                    "Green"
                                ]
                            }
                        },
                        "name": "Trygon Predator",
                        "colors": [
                            "Blue",
                            "Green"
                        ],
                        "mana_cost": "{1}{G}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Fauna Shaman",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Wall of Blossoms",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Snuff Out",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Polluted Delta",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "x_spells_are_infinite": {
                                "converted_mana_cost": -1
                            },
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Shining Shoal",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{X}{W}{W}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Regrowth",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{1}{G}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "White"
                                ]
                            }
                        },
                        "name": "Rout",
                        "colors": [
                            "White"
                        ],
                        "mana_cost": "{3}{W}{W}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Slagstorm",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{1}{R}{R}",
                        "types": [
                            "Sorcery"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Blood Knight",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{R}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": null,
                        "name": "Plateau",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Razormane Masticore",
                        "colors": [],
                        "mana_cost": "{5}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black"
                                ]
                            }
                        },
                        "name": "Bloodgift Demon",
                        "colors": [
                            "Black"
                        ],
                        "mana_cost": "{3}{B}{B}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "White",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Clifftop Retreat",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green"
                                ]
                            }
                        },
                        "name": "Avacyn's Pilgrim",
                        "colors": [
                            "Green"
                        ],
                        "mana_cost": "{G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Willbender",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Temple Garden",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Ingot Chewer",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{4}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue",
                                    "White"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Glacial Fortress",
                        "colors": [],
                        "mana_cost": null,
                        "types": [
                            "Land"
                        ],
                        "converted_mana_cost": 0
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Red"
                                ]
                            }
                        },
                        "name": "Char",
                        "colors": [
                            "Red"
                        ],
                        "mana_cost": "{2}{R}",
                        "types": [
                            "Instant"
                        ],
                        "converted_mana_cost": 3
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": []
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": []
                            }
                        },
                        "name": "Wurmcoil Engine",
                        "colors": [],
                        "mana_cost": "{6}",
                        "types": [
                            "Artifact",
                            "Creature"
                        ],
                        "converted_mana_cost": 6
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Green",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Tattermunge Maniac",
                        "colors": [
                            "Green",
                            "Red"
                        ],
                        "mana_cost": "{R/G}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 1
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Black",
                                    "Red"
                                ]
                            }
                        },
                        "name": "Olivia Voldaren",
                        "colors": [
                            "Black",
                            "Red"
                        ],
                        "mana_cost": "{2}{B}{R}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 4
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Meloku the Clouded Mirror",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{4}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 5
                    },
                    {
                        "heuristics": {
                            "caring_about_spell_colors_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_land_types_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            },
                            "caring_about_controlling_colored_permanents_affects_color": {
                                "colors": [
                                    "Blue"
                                ]
                            }
                        },
                        "name": "Snapcaster Mage",
                        "colors": [
                            "Blue"
                        ],
                        "mana_cost": "{1}{U}",
                        "types": [
                            "Creature"
                        ],
                        "converted_mana_cost": 2
                    }
                ];
            }
        }
    });
