// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  console.log('get current tab url');
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var content = tab.url;
    var url = tab.url;
    callback(content);
  })
}

function renderStatus(statusText) {
  console.log('callback is runing');
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content arealdy load');
  getCurrentTabUrl(function(url) {
    renderStatus(url);
  });
});
