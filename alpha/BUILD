load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@bazel_skylib//lib:partial.bzl", "partial")
load("//bazel:next.bzl", "next")

_SRCS = glob(
    include = [
        "pages/**",
        "next-env.d.ts",
    ],
)

_DEPS = [
    "//:node_modules/@types/node",
    "//:node_modules/@types/react",
    "//:node_modules/axios",
    "//:node_modules/next",
    "//:node_modules/react",
    "//:node_modules/react-dom",
    "//:node_modules/swr",
]

filegroup(
    name = "public",
    srcs = glob(
        include = [
            "public/**",
            "src/**"
        ],
    ),
)

filegroup(
    name = "styles",
    srcs = glob(
        include = [
             "styles/*.css",
        ],
    ),
)

ts_project(
    name = "project",
    srcs = _SRCS + [
        ":public"
    ],
    allow_js = True,
    declaration = True,
    preserve_jsx = True,
    resolve_json_module = True,
    source_map = True,
    supports_workers = False,
    transpiler = partial.make(
        swc,
        source_maps = "true",
        swcrc = ":.swcrc",
    ),
    tsconfig = ":tsconfig.json",
    deps = _DEPS,
)

next(
    name = "next",
    srcs = [
        ":project",
        ":public",
        ":styles",
    ],
    data = [
        "next.config.js",
        "next-env.d.ts",
    ] + _DEPS,
    next_bin = "../node_modules/next/dist/bin/next",
    next_js_binary = "//:next_js_binary",
)
