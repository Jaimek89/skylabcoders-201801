describe('Shuffle', function () {
    var a;
    var a1;

    beforeEach(function() {
        a = [10,9,8,7,6,5,4,3,2,1];
        a1 = [10,9,8,7,6,5,4,3,2,1];
    });

    function testShuffle() {
        expect(a).not.toEqual(shuffle(a1));
     
    }

    it(testShuffle.name, testShuffle);
});
