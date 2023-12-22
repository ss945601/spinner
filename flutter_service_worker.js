'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c1ebf17094dcdd20e913ce4b9d84f6a7",
"index.html": "f71f71c8f4add81cd03b4f0739e2ab0a",
"/": "f71f71c8f4add81cd03b4f0739e2ab0a",
"main.dart.js": "cd1e581b70b9132ae924740048d3fa56",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f96dc315be9b1b638d029e6dbe786a15",
".git/config": "16a60bcfa869455184481759a6de1658",
".git/objects/66/dba20a80ebf69e52a6736d992b59a4e359760b": "686d0596e95dc5ca4d0ff29c8be9ba3c",
".git/objects/3b/04a4f33d7e88cb6067a126e46a6f0ee9acd8ef": "18dac1afeddb057430f5e967b658331c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/51/6631c96a5d251e8c9bec9a6ef225ef1838a4b0": "bc6188e7a90112ea534867270c97a0dc",
".git/objects/9c/798ad2717c41ce4aef4f504e0b7b7d55850f8e": "741c71a61d293969231bc1cc16a6d480",
".git/objects/a4/b5d712cb031ee32c9c1086dd32674b393905ac": "b5179ddefb40061646576d97c0776f83",
".git/objects/b5/ab2745b238c11b01c6daeb935ef63b31fb7d6b": "e772c51dd0c7224e75c17bfa8c255bc0",
".git/objects/b5/5b77264c6ed8ddf8658a09b4745f2173d1aa2e": "dfa2dd0195aa98492f5730cc70572a76",
".git/objects/bb/453ef97f23151f9c9b818b3cc864c6342bfc2d": "e95fa61727111acca729fcdfcaebd4d6",
".git/objects/d7/1282333100504646053623ed3a4505f1279603": "132d41c6399f6c50f9f74e6666b500ce",
".git/objects/df/953b7f30beb37b3cca2e68d48550da86fd0c0a": "f461cf4a3f2a9e21ead1df1b6e98eb4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/39fc14696ce7c846ee8983c26ce00233fa9d43": "448cc5736fabe7604c0653b89f3af6d7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ad2e8a3465d161936fb92b15e306ffe4a097f0": "cac139811959c8ad77c5594a2fb19ece",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/8706d6c833bf084104ba435b425c88fba3ac1f": "1b17c87d745ca30ef40c1cc5cdf836fc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ca/a540e8327b8908a7b6bf0633c4535a8dfb51ad": "0d3457b25aa164d1de884041954cdc7c",
".git/objects/4e/5cd2c71ae81111660c4bf9a734d970b148d524": "83564493c8e6b08f86f6be1539c3175b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/ef8221ebeb75b8ee1bebee4a8ee55895e8e930": "b69d5fbba75c120a84ad7674663b8c9b",
".git/objects/80/583ca1feda7cc65bd8ec15d05495eef2ab14b6": "eca70fbcfc3298c160a3314185b476a7",
".git/objects/74/7d0012604521674baa260ce19306e0912c87e7": "530ab85430561229274fdbf9df805705",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/9a74b6fb6fec2be975758f53e2998b18742e4f": "7050e661c88d150d61b3641aee1503aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/66dbed5ae025bc5f545704f8b9771224a33355": "9a5bcc520a07a0571be851d31b328837",
".git/objects/75/4c8330fdd1011c690f6708c381a62ffde55aa2": "82b8d57ee270868453f8feb69f1a98f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/8261086f2ef2dd2ad1594a2afc5ad76d2d4743": "ba6b050e596d4dc4af367dec8b379abf",
".git/objects/36/08ebc93b98736f4d4ef114e23378ae64253563": "556a88d720dee44f3021725d64fa95ef",
".git/objects/5c/3d6dd122fa911465b12bf624913fcf3ec4f4e2": "94717a62755fe069bf778e0fa73f4e99",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/43381048f34f685c32d4966f7538f40ac827da": "3265c60efab455caf2f9fb8cb86930df",
".git/objects/08/4f5ddfa2b8a9708c17aac970a1e5b56296fd7b": "ac512bb43c5b99f0a305ff41ae131afe",
".git/objects/6d/9d901ab5be765c5f4a08dccb1baf0d05b8e089": "7efb0354eae31c8b5996f9c3b10ff6b2",
".git/objects/01/675d36c2fd4029e32a52adb8ddff522d55bbf2": "9589007b57377450381ae5f9a945ccbf",
".git/objects/39/208a0c189a61a6d1699f0ebcc582cb0c68d4f7": "557b663c37b50513a972c840114e3b98",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/95033e45c5df322f31a9eb8c4fc32b770a7417": "1d0a28406c444aec1d5270449d186c3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/c5a3cdc73ba07b483dfb2049a07f5acc66a097": "e54becc887015e3f36838d9af99183ca",
".git/objects/4a/bb2f892f0bcf25b3ec22e15ac62460013350d5": "c1a5c597ad424d2bdd91332ed399ffa1",
".git/objects/23/adfe423d6a2e201c997ff6a36998450a881920": "6b97305495ccf90809994228d0a40ae0",
".git/objects/12/3e8c719b075ea07c0edea119bdfc0a70aa997b": "390400c72bfb2f1e96ff1a026f30b139",
".git/objects/8c/7cbfaf5a65bde2c88d25659e1206e40664da15": "18c159d870cfedd84f0ec23d7ee5d074",
".git/objects/1d/dfa51c45d5930d383d2f3f95c015e4a09f0e7d": "458aa15f6c42e06653f0888979256a1e",
".git/objects/76/174ff3fbf6444f727b291ba78755af0c43de3a": "86882388d4957c154f5516bfa099c70e",
".git/objects/1c/b76a53ca3af1c25920e9c2b660c15f25223c7c": "f6a5404eec32e958a53a873ccdd1ac2b",
".git/objects/2e/4463b7c83d91fca204b9ade37fb03577397e93": "c636db51385c9997ba1994700e053ec5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/25/16ad5f06d57afc46ba52420f8728ba8426814b": "e582a99bcd965dac63b8060b546e3255",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "393a5966d988704bdd48ac632a921b58",
".git/logs/refs/heads/main": "8ea7539b74faabb78bd004808bbf5c05",
".git/logs/refs/remotes/origin/main": "3cac7fedbef2a324df680442edc69439",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1539dde7f99abec4b8c6c2c3b6559e2b",
".git/refs/remotes/origin/main": "1539dde7f99abec4b8c6c2c3b6559e2b",
".git/index": "297a81e773167f0f1769c486ce357c68",
".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
".git/FETCH_HEAD": "dec4378258e6f668fa455ec8a316aa72",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "514b0d85b647f7f2b033a9fa0477f478",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "5e608fdc1575ebb308941a5a5fe0d733",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
