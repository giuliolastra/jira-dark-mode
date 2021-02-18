const addStyleSheet = function () {
    let cssUrl = typeof browser === 'undefined' ? chrome.runtime.getURL("css/main.css") : browser.runtime.getURL("css/main.css")

    let linkRelCSS = document.createElement('link')

    linkRelCSS.setAttribute('rel', 'stylesheet')
    linkRelCSS.setAttribute('type', 'text/css')
    linkRelCSS.setAttribute('href', cssUrl)

    document.head.appendChild(linkRelCSS)
}


const styleIFrames = function () {

    let iframes = document.getElementsByTagName('iframe')

    for (let i = 0; i < iframes.length; i++) {

        const iframeStyle = document.createElement("style")
        iframeStyle.textContent = "html,body{background: transparent;filter: invert(100%) hue-rotate(180deg);}"

        try {

            iframes[i].contentWindow.document.head.appendChild(iframeStyle)

        } catch (e) {

            console.error('Cannot apply Dark Theme on iFrame')

        }

    }
}

if (window.location.href.match(/(jira\.)|(atlassian.net)|(jira.atlassian.com)/i)?.index) {

    window.onload = function () {

        addStyleSheet();
        styleIFrames();

    }

}
