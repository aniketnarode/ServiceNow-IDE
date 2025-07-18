import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "9d1c679d25c5442fb139d8016d136834"
                        },
                        "src_server_script_js": {
                            "table": "sys_module",
                            "id": "b1c50a569f0d4dd8b8084e3df27df2b5"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "be2bef9cc75246d3ab51ec585ec1b40a"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "4957bdc64dc149baba03282b8ad1d6e1"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "63f49b3338754ff1a884f5652f6d1a5c",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "bbdf7bb2e7784076999c5b50a0d35ef5",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "f4b143c474b342cfb0a13b6f06a1824c",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
