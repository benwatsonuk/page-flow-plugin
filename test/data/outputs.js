module.exports.getPageInfoForUserFlow = {
    "hasHistory": [
        {
            "description": "Page 2",
            "location": "/v0/example1/example2",
            "sprint": undefined,
            "version": 0
        }
    ],
    "journeyId": "example1",
    "location": "0/example1/example2",
    "navigation": {
        "next": {
            "link": "/0/user-flow/example1/example1/example2",
            "pageInfo": {
                "description": "Page 2",
                "id": "2",
                "location": "example2",
                "stageInfo": {
                    "location": "example1",
                    "name": "Example 1"
                },
                "title": "Page 2",
                "type": "text-input",
                "userNeeds": []
            }
        },
        "prev": {
            "link": "/0/user-flow/example1/example2/example1",
            "pageInfo": {
                "description": "Page 1",
                "id": "1",
                "location": "example1",
                "stageInfo": {
                    "location": "example2",
                    "name": "Example2"
                },
                "title": "Page 1",
                "type": "text-input",
                "userNeeds": []
            }
        }
    },
    "pageFlow": {
        "stages": [
            {
                "description": "",
                "id": "example1",
                "location": "example1",
                "name": "Example 1",
                "versions": [
                    {
                        "design-notes": "",
                        "location": "example1",
                        "pages": [
                            {
                                "description": "Page 1",
                                "id": "1",
                                "location": "example1",
                                "title": "Page 1",
                                "type": "checkbox-input",
                                "userNeeds": []
                            },
                            {
                                "description": "Page 2",
                                "id": "2",
                                "location": "example2",
                                "stageInfo": {
                                    "location": "example1",
                                    "name": "Example 1"
                                },
                                "title": "Page 2",
                                "type": "text-input",
                                "userNeeds": []
                            },
                            {
                                "altDesigns": [
                                    {
                                        "description": "Address formatted as one line to reduce visual significance afforded to it",
                                        "queryString": "showAltAddress=true"
                                    }
                                ],
                                "description": "Page 3",
                                "id": "3",
                                "location": "example3",
                                "title": "Page 3",
                                "type": "confirmation",
                                "userNeeds": []
                            }
                        ],
                        "versionDirectory": "v0",
                        "users": [
                            "individual"
                        ],
                        "version": 0
                    }
                ]
            },
            {
                "description": "Example 2",
                "id": "example2",
                "location": "example2",
                "name": "Example2",
                "versions": [
                    {
                        "design-notes": "",
                        "location": "example2",
                        "pages": [
                            {
                                "description": "Page 1",
                                "id": "1",
                                "location": "example1",
                                "stageInfo": {
                                    "location": "example2",
                                    "name": "Example2"
                                },
                                "title": "Page 1",
                                "type": "text-input",
                                "userNeeds": []
                            }
                        ],
                        "versionDirectory": "v0",
                        "users": [
                            "individual"
                        ],
                        "version": 0
                    },
                    {
                        "design-notes": "Example 2 with a slight tweak",
                        "location": "example2",
                        "pages": [
                            {
                                "altDesigns": [
                                    {
                                        "description": "Address formatted as one line to reduce visual significance afforded to it",
                                        "queryString": "showAltAddress=true"
                                    }
                                ],
                                "changeLog": [
                                    "CX-570"
                                ],
                                "description": "Page 1 with a slight tweak to content",
                                "id": "1",
                                "location": "example1",
                                "title": "Page 1",
                                "type": "text-input",
                                "userNeeds": []
                            }
                        ],
                        "users": [
                            "individual"
                        ],
                        "version": 1,
                        "versionDirectory": "v1"
                    }
                ]
            }
        ]
    },
    "thisPage": {
        "description": "Page 2",
        "id": "2",
        "location": "example2",
        "stageInfo": {
            "location": "example1",
            "name": "Example 1"
        },
        "title": "Page 2",
        "type": "text-input",
        "userNeeds": []
    },
    "thisStage": {
        "description": "",
        "id": "example1",
        "location": "example1",
        "name": "Example 1",
        "versions": [
            {
                "design-notes": "",
                "location": "example1",
                "pages": [
                    {
                        "description": "Page 1",
                        "id": "1",
                        "location": "example1",
                        "title": "Page 1",
                        "type": "checkbox-input",
                        "userNeeds": []
                    },
                    {
                        "description": "Page 2",
                        "id": "2",
                        "location": "example2",
                        "stageInfo": {
                            "location": "example1",
                            "name": "Example 1"
                        },
                        "title": "Page 2",
                        "type": "text-input",
                        "userNeeds": []
                    },
                    {
                        "altDesigns": [
                            {
                                "description": "Address formatted as one line to reduce visual significance afforded to it",
                                "queryString": "showAltAddress=true"
                            }
                        ],
                        "description": "Page 3",
                        "id": "3",
                        "location": "example3",
                        "title": "Page 3",
                        "type": "confirmation",
                        "userNeeds": []
                    }
                ],
                "versionDirectory": "v0",
                "users": [
                    "individual"
                ],
                "version": 0
            }
        ]
    },
    "version": 0
}

module.exports.pageFlowFromUserFlowTest = [
    {
        "flow": [
            {
                "pages": [
                    {
                        "altDesigns": [],
                        "hasChange": false,
                        "id": "1",
                        "pageInfo": {
                            "description": "Page 1",
                            "id": "1",
                            "location": "example1",
                            "title": "Page 1",
                            "type": "checkbox-input",
                            "userNeeds": []
                        }
                    }
                ],
                "stage": {
                    "description": "",
                    "id": "example1",
                    "location": "example1",
                    "name": "Example 1",
                    "versions": [
                        {
                            "design-notes": "",
                            "location": "example1",
                            "pages": [
                                {
                                    "description": "Page 1",
                                    "id": "1",
                                    "location": "example1",
                                    "title": "Page 1",
                                    "type": "checkbox-input",
                                    "userNeeds": []
                                },
                                {
                                    "description": "Page 2",
                                    "id": "2",
                                    "location": "example2",
                                    "stageInfo": {
                                        "location": "example1",
                                        "name": "Example 1"
                                    },
                                    "title": "Page 2",
                                    "type": "text-input",
                                    "userNeeds": []
                                },
                                {
                                    "altDesigns": [
                                        {
                                            "description": "Address formatted as one line to reduce visual significance afforded to it",
                                            "queryString": "showAltAddress=true"
                                        }
                                    ],
                                    "description": "Page 3",
                                    "id": "3",
                                    "location": "example3",
                                    "title": "Page 3",
                                    "type": "confirmation",
                                    "userNeeds": []
                                }
                            ],
                            "users": [
                                "individual"
                            ],
                            "version": 0,
                            "versionDirectory": "v0"
                        }
                    ]
                }
            },
            {
                "pages": [
                    {
                        "altDesigns": [],
                        "hasChange": false,
                        "id": "1",
                        "pageInfo": {
                            "description": "Page 1",
                            "id": "1",
                            "location": "example1",
                            "stageInfo": {
                                "location": "example2",
                                "name": "Example2"
                            },
                            "title": "Page 1",
                            "type": "text-input",
                            "userNeeds": []
                        }
                    }
                ],
                "stage": {
                    "description": "Example 2",
                    "id": "example2",
                    "location": "example2",
                    "name": "Example2",
                    "versions": [
                        {
                            "design-notes": "",
                            "location": "example2",
                            "pages": [
                                {
                                    "description": "Page 1",
                                    "id": "1",
                                    "location": "example1",
                                    "stageInfo": {
                                        "location": "example2",
                                        "name": "Example2"
                                    },
                                    "title": "Page 1",
                                    "type": "text-input",
                                    "userNeeds": []
                                }
                            ],
                            "users": [
                                "individual"
                            ],
                            "version": 0,
                            "versionDirectory": "v0"
                        },
                        {
                            "design-notes": "Example 2 with a slight tweak",
                            "location": "example2",
                            "pages": [
                                {
                                    "altDesigns": [
                                        {
                                            "description": "Address formatted as one line to reduce visual significance afforded to it",
                                            "queryString": "showAltAddress=true"
                                        }
                                    ],
                                    "changeLog": [
                                        "CX-570"
                                    ],
                                    "description": "Page 1 with a slight tweak to content",
                                    "id": "1",
                                    "location": "example1",
                                    "title": "Page 1",
                                    "type": "text-input",
                                    "userNeeds": []
                                }
                            ],
                            "users": [
                                "individual"
                            ],
                            "version": 1,
                            "versionDirectory": "v1"
                        }
                    ]
                }
            },
            {
                "pages": [
                    {
                        "altDesigns": [],
                        "hasChange": false,
                        "id": "2",
                        "pageInfo": {
                            "description": "Page 2",
                            "id": "2",
                            "location": "example2",
                            "stageInfo": {
                                "location": "example1",
                                "name": "Example 1"
                            },
                            "title": "Page 2",
                            "type": "text-input",
                            "userNeeds": []
                        }
                    },
                    {
                        "id": "2",
                        "altDesigns": [],
                        "hasChange": false,
                        "pageInfo": {
                            "description": "Page 2",
                            "id": "2",
                            "location": "example2",
                            "stageInfo": {
                                "location": "example1",
                                "name": "Example 1"
                            },
                            "title": "Page 2",
                            "type": "text-input",
                            "userNeeds": []
                        }
                    }
                ],
                "stage": {
                    "description": "",
                    "id": "example1",
                    "location": "example1",
                    "name": "Example 1",
                    "versions": [
                        {
                            "design-notes": "",
                            "location": "example1",
                            "pages": [
                                {
                                    "description": "Page 1",
                                    "id": "1",
                                    "location": "example1",
                                    "title": "Page 1",
                                    "type": "checkbox-input",
                                    "userNeeds": []
                                },
                                {
                                    "description": "Page 2",
                                    "id": "2",
                                    "location": "example2",
                                    "stageInfo": {
                                        "location": "example1",
                                        "name": "Example 1"
                                    },
                                    "title": "Page 2",
                                    "type": "text-input",
                                    "userNeeds": []
                                },
                                {
                                    "altDesigns": [
                                        {
                                            "description": "Address formatted as one line to reduce visual significance afforded to it",
                                            "queryString": "showAltAddress=true"
                                        }
                                    ],
                                    "description": "Page 3",
                                    "id": "3",
                                    "location": "example3",
                                    "title": "Page 3",
                                    "type": "confirmation",
                                    "userNeeds": []
                                }
                            ],
                            "users": [
                                "individual"
                            ],
                            "version": 0,
                            "versionDirectory": "v0"
                        }
                    ]
                }
            }
        ],
        "userType": {
            "changeLog": [
                "Change 1",
                "Change 2",
                "Change 3"
            ],
            "description": "Example journey 1",
            "id": "example1",
            "name": "Example journey 1"
        }
    }
]

module.exports.hasPageChangedSinceLastVersionTest = {
    thePageWeNeed: {
        "stage": "example2",
        "version": 1,
        "pageId": "1",
        "location": "example1"
    },

    theCurrentFlow: [
        {
            "stage": "example1",
            "version": 0,
            "pageId": "1",
            "location": "example1"
        },
        {
            "stage": "example2",
            "version": 1,
            "pageId": "1",
            "location": "example1"
        },
        {
            "stage": "example1",
            "version": 0,
            "pageId": "2",
            "location": "example2"
        },
        {
            "stage": "example1",
            "version": 0,
            "pageId": "2",
            "location": "example2?query=foo&query2=bar"
        }
    ],

    thePreviousFlow: [
        {
            "stage": "example1",
            "version": 0,
            "pageId": "1",
            "location": "example1"
        },
        {
            "stage": "example2",
            "version": 0,
            "pageId": "1",
            "location": "example1"
        },
        {
            "stage": "example1",
            "version": 0,
            "pageId": "2",
            "location": "example2"
        },
        {
            "stage": "example1",
            "version": 0,
            "pageId": "2",
            "location": "example2?query=foo&query2=bar"
        }
    ]
}
module.exports.getPageHistoryTest = {
    pageInfo: {
        "title": "Page 2",
        "id": "2",
        "userNeeds": [],
        "description": "Page 2",
        "type": "text-input",
        "location": "example2",
        "stageInfo": {
            "location": "example1",
            "name": "Example 1"
        }
    },
    stageInfo: {
        "name": "Example 1",
        "location": "example1",
        "id": "example1",
        "description": "",
        "versions": [
            {
                "version": 0,
                "versionDirectory": "v0",
                "location": "example1",
                "users": [
                    "individual"
                ],
                "design-notes": "",
                "pages": [
                    {
                        "title": "Page 1",
                        "id": "1",
                        "userNeeds": [],
                        "description": "Page 1",
                        "type": "checkbox-input",
                        "location": "example1"
                    },
                    {
                        "title": "Page 2",
                        "id": "2",
                        "userNeeds": [],
                        "description": "Page 2",
                        "type": "text-input",
                        "location": "example2",
                        "stageInfo": {
                            "location": "example1",
                            "name": "Example 1"
                        }
                    },
                    {
                        "title": "Page 3",
                        "id": "3",
                        "userNeeds": [],
                        "description": "Page 3",
                        "type": "confirmation",
                        "location": "example3"
                    }
                ]
            }
        ]
    },
    output: [
        {
            "description": "Page 2",
            "location": "/v0/example1/example2",
            "sprint": undefined,
            "version": 0
        }
    ]
}
module.exports.getPageDesignAlternativesTest = {
    pageInfo: {
        "title": "Page 2",
        "id": "2",
        "altDesigns": [
            {
                "description": "Address formatted as one line to reduce visual significance afforded to it",
                "queryString": "showAltAddress=true"
            }
        ],
        "userNeeds": [],
        "description": "Page 2",
        "type": "text-input",
        "location": "example2",
        "stageInfo": {
            "location": "example1",
            "name": "Example 1"
        }
    },
    stageInfo: {
        "name": "Example 1",
        "location": "example1",
        "id": "example1",
        "description": "",
        "versions": [
            {
                "version": 0,
                "versionDirectory": "v0",
                "location": "example1",
                "users": [
                    "individual"
                ],
                "design-notes": "",
                "pages": [
                    {
                        "title": "Page 1",
                        "id": "1",
                        "userNeeds": [],
                        "description": "Page 1",
                        "type": "checkbox-input",
                        "location": "example1"
                    },
                    {
                        "title": "Page 2",
                        "id": "2",
                        "userNeeds": [],
                        "description": "Page 2",
                        "type": "text-input",
                        "location": "example2",
                        "stageInfo": {
                            "location": "example1",
                            "name": "Example 1"
                        }
                    },
                    {
                        "title": "Page 3",
                        "id": "3",
                        "userNeeds": [],
                        "description": "Page 3",
                        "type": "confirmation",
                        "location": "example3"
                    }
                ]
            }
        ]
    },
    output: [
        {
            "description": "Page 2",
            "location": "/v0/example1/example2",
            "sprint": undefined,
            "version": 0
        }
    ],
    output2: [
        {
            "description": "Address formatted as one line to reduce visual significance afforded to it",
            "location": "example2?showAltAddress=true"
        }
    ]
}
