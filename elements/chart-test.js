describe('Testing Chart', function () {
    var done = false;

    it('Tag chart-pie should exist on the page', function () {
        var fixture = document.createElement('div');
        fixture.innerHTML = '<chart-pie values="[20, 30, 100]"></chart-pie>';
        document.body.appendChild(fixture);
        done = false;

        var el = document.querySelector('chart-pie');
        el.addEventListener('chart-ready', function() {
            done = true;
        });
        waitsFor(function () {
            return done;
        }, 5000);
        runs(function () {
            expect(el).toBeDefined();
            expect(el.shadowRoot.querySelector('canvas')).toBeDefined();
        });

    });

});