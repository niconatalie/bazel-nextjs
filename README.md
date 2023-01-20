This repository contain simple react app created from `create-next-app` CLI and integrated with Bazel using template from [aspect build examples](https://github.com/aspect-build/bazel-examples/tree/7166abe8e2fc4302fdb67bc78f149f1249531f2e/next.js).

## Build without bazel
The project can be built directly without bazel
```sh
npx build alpha/
```
output
```
...
info  - Generating static pages (3/3)
info  - Finalizing page optimization  

Route (pages)                              Size     First Load JS
┌ ○ /                                      27.1 kB         105 kB
├   └ css/ae0e3e027412e072.css             707 B
├   /_app                                  0 B            77.8 kB
├ ○ /404                                   180 B          77.9 kB
└ λ /api/hello                             0 B            77.8 kB
+ First Load JS shared by all              78 kB
  ├ chunks/framework-57dd2b5ecd6f9a49.js   45.5 kB
  ├ chunks/main-ab9ae0823c9f6e3d.js        31 kB
  ├ chunks/pages/_app-d6b2302e7f13895b.js  499 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/ab44ce7add5c3d11.css               247 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

```


## Error when building with Bazel
When using bazel to build the project, it will fail with error `TypeError: Cannot read properties of null (reading 'useContext')`
```sh
bazel build //alpha:next
```
<details>
<summary>Full error logs</summary>
  
```
TypeError: Cannot read properties of null (reading 'useContext')
    at exports.useContext (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react@18.2.0/node_modules/react/cjs/react.production.min.js:24:118)
    at useSWRConfig (file:///home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/swr@1.3.0_react@18.2.0/node_modules/swr/dist/index.mjs:587:40)
    at useSWRArgs (file:///home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/swr@1.3.0_react@18.2.0/node_modules/swr/dist/index.mjs:599:30)
    at file:///home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/swr@1.3.0_react@18.2.0/node_modules/swr/immutable/dist/index.mjs:46:16
    at useAuth (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/alpha/.next/server/pages/index.js:322:72)
    at Home (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/alpha/.next/server/pages/index.js:52:87)
    at Wc (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:44)
    at Zc (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:253)
    at Z (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Zc (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:481)

Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: Cannot read properties of null (reading 'useContext')
    at exports.useContext (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react@18.2.0/node_modules/react/cjs/react.production.min.js:24:118)
    at useSWRConfig (file:///home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/swr@1.3.0_react@18.2.0/node_modules/swr/dist/index.mjs:587:40)
    at useSWRArgs (file:///home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/swr@1.3.0_react@18.2.0/node_modules/swr/dist/index.mjs:599:30)
    at file:///home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/swr@1.3.0_react@18.2.0/node_modules/swr/immutable/dist/index.mjs:46:16
    at useAuth (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/alpha/.next/server/pages/index.js:322:72)
    at Home (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/alpha/.next/server/pages/index.js:52:87)
    at Wc (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:44)
    at Zc (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:253)
    at Z (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Zc (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:481)

> Build error occurred
Error: Export encountered errors on following paths:
        /
    at /home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/export/index.js:404:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Span.traceAsyncFn (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/trace/trace.js:79:20)
    at async /home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/index.js:1230:21
    at async Span.traceAsyncFn (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/trace/trace.js:79:20)
    at async /home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/index.js:1092:17
    at async Span.traceAsyncFn (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/trace/trace.js:79:20)
    at async Object.build [as default] (/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/150/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/next@12.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/index.js:65:29)
info  - Linting and checking validity of types...
info  - Creating an optimized production build...
info  - Compiled successfully
info  - Collecting page data...
info  - Generating static pages (0/3)
info  - Generating static pages (3/3)
Target //alpha:next failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 4.719s, Critical Path: 4.41s
INFO: 2 processes: 2 internal.
FAILED: Build did NOT complete successfully
```
</details>


## Try Isolate the problem by running the command that bazel use manually from inside sandbox

First build the project with --sandbox_debug to retain the sandbox
```
bazel build //alpha:next --sandbox_debug
```
output
```
INFO: Analyzed target //alpha:next (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
/home/johndoe/Documents/bazel-nextjs/alpha/BUILD:62:5: JsRunBinary alpha/.next failed: (Exit 1): linux-sandbox failed: error executing command 
  (cd /home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/153/execroot/__main__ && \
  exec env - \
    BAZEL_BINDIR=bazel-out/k8-fastbuild/bin \
    BAZEL_BUILD_FILE_PATH=alpha/BUILD \
    BAZEL_COMPILATION_MODE=fastbuild \
    BAZEL_PACKAGE=alpha \
    BAZEL_TARGET=//alpha:next \
    BAZEL_TARGET_CPU=k8 \
    BAZEL_TARGET_NAME=next \
    BAZEL_WORKSPACE=__main__ \
    JS_BINARY__CHDIR=alpha \
    JS_BINARY__PATCH_NODE_FS=1 \
    JS_BINARY__SILENT_ON_SUCCESS=1 \
    JS_BINARY__USE_EXECROOT_ENTRY_POINT=1 \
    TMPDIR=/tmp \
  /home/johndoe/.cache/bazel/_bazel_johndoe/install/616d39adb94ebfda4ae84d4ce81a9faf/linux-sandbox -t 15 -w /home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/153/execroot/__main__ -w /tmp -w /dev/shm -D -- bazel-out/k8-opt-exec-2B5CBBC6/bin/next_js_binary.sh build)
```

cd to sandbox directory
```
cd /home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/153/execroot/__main__
```

set the correct env variable
```
export BAZEL_BINDIR=bazel-out/k8-fastbuild/bin \
  BAZEL_BUILD_FILE_PATH=alpha/BUILD \
  BAZEL_COMPILATION_MODE=fastbuild \
  BAZEL_PACKAGE=alpha \
  BAZEL_TARGET=//alpha:next \
  BAZEL_TARGET_CPU=k8 \
  BAZEL_TARGET_NAME=next \
  BAZEL_WORKSPACE=__main__ \
  JS_BINARY__CHDIR=alpha \
  JS_BINARY__PATCH_NODE_FS=1 \
  JS_BINARY__SILENT_ON_SUCCESS=1 \
  JS_BINARY__USE_EXECROOT_ENTRY_POINT=1 \
  TMPDIR=/tmp
```

Run next build using `node` and `next` file/binary that bazel use
```
bazel-out/k8-opt-exec-2B5CBBC6/bin/next_js_binary.sh build
```

By running command above, its getting another error which is weird because its coming from the project, not `node_modules`
```
../../../../../../../../../../../execroot/wcm_backend/bazel-out/k8-fastbuild/bin/projects/helloworld/nextjs/styles/Home.module.css
CSS Modules cannot be imported from within node_modules.
...
```
  
## Successful attempt
We are guessing the problem are coming from symlink. So from previous step, we copy the project directory but removing the symlink and disable the `JS_BINARY__PATCH_NODE_FS`
```
pwd
/home/johndoe/.cache/bazel/_bazel_johndoe/25d004fb5c04e5a88a6bfa9d50504171/sandbox/linux-sandbox/153/execroot/__main__

cp -arL bazel-out/k8-fastbuild/bin/alpha/ bazel-out/k8-fastbuild/bin/alpha2
```

set the correct env variable
```
export BAZEL_BINDIR=bazel-out/k8-fastbuild/bin \
  BAZEL_BUILD_FILE_PATH=alpha/BUILD \
  BAZEL_COMPILATION_MODE=fastbuild \
  BAZEL_PACKAGE=alpha \
  BAZEL_TARGET=//alpha:next \
  BAZEL_TARGET_CPU=k8 \
  BAZEL_TARGET_NAME=next \
  BAZEL_WORKSPACE=__main__ \
  JS_BINARY__CHDIR=alpha2 \
  JS_BINARY__PATCH_NODE_FS=0 \
  JS_BINARY__SILENT_ON_SUCCESS=1 \
  JS_BINARY__USE_EXECROOT_ENTRY_POINT=1 \
  TMPDIR=/tmp
```

Running build to the directory without symlink
```
bazel-out/k8-opt-exec-2B5CBBC6/bin/next_js_binary.sh build
```

**Success**
```
info  - Linting and checking validity of types  
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data  
info  - Generating static pages (3/3)
info  - Finalizing page optimization  

Route (pages)                              Size     First Load JS
┌ ○ /                                      27.6 kB         105 kB
├   └ css/ae0e3e027412e072.css             707 B
├   /_app                                  0 B            77.7 kB
├ ○ /404                                   182 B          77.9 kB
└ λ /api/hello                             0 B            77.7 kB
+ First Load JS shared by all              78 kB
  ├ chunks/framework-a37656f024366d33.js   45.5 kB
  ├ chunks/main-6b3a4d2a5e76fd23.js        31 kB
  ├ chunks/pages/_app-4e29f0ec9e4ddf16.js  488 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/ab44ce7add5c3d11.css               247 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```
