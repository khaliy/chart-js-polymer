describe('Testing Chart', function () {

    var script1 = document.createElement("script");
    script1.src = "/base/bower_components/platform/platform.js";
    document.getElementsByTagName("head")[0].appendChild(script1);

    var script2 = document.createElement("script");
    script2.src = "/base/bower_components/polymer/polymer.js";
    document.getElementsByTagName("head")[0].appendChild(script2);

    var link = document.createElement("link");
    link.rel = "import";
    link.href = "/base/elements/chart.html";
    document.getElementsByTagName("head")[0].appendChild(link);

    var fixture = document.createElement('div');
    fixture.innerHTML = __html__['test/chart-fixture.html'];
    document.body.appendChild(fixture);

    var el = document.getElementsByTagName('chart-pie')[0];

    it('Tag chart-pie should exist on the page', function () {
        expect(el).toBeDefined();
    });

    it('Tag chart-pie should have shadowRoot which contains a canvas', function() {
        //debugger;
        expect(el.shadowRoot.textContent).toContain('canvas');
    });

});