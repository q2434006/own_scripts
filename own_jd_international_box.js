/*

 */
/*
京东国际盲盒
日常任务
多账号间互助助力开盲盒

需要安装 crypto-js
docker 下执行 npm i crypto-js

===================Loon==============
[Script]
cron "13 0,12 8-31 3 *" script-path=, tag=京东国际盲盒
 */
const CryptoJS = require('crypto-js')
const $ = new Env('京东国际盲盒');
const notify = $.isNode() ? require('../sendNotify') : '';
const jdCookieNode = $.isNode() ? require('../jdCookie.js') : '';
let cookiesArr = [],
    cookie = '';

var _0xodp = 'jsjiami.com.v6',
    _0xf2eb = [_0xodp, 'wpDDonQYKg==', 'DcKewp/Du28=', 'wqtWT8KFwoduw5QGwoc=', 'ZxQTwo7DnElG', 'dzs7IUE=', 'w5djRcKmeg==', 'QSU6JAk=', 'w7wjR8KSw4E=', 'ZcKlFX7CgQ==', 'wqdNYXJu', 'w4dlPDvDhQ==', 'w6Q9CzjDrMO6UytRwp0=', 'wrBJR0Ri', 'w6M7Gy3DrcKSGWd5wonCh8OBNcKBwqHDnhUfwohIwpLCjcK+RcODw6Z2KMKyYxnDkcKiwqHChmTDslTCksOJwp1+CWzDq8KXwoUZTBrCicOIwo9XPntswqDCpgdxwptiDg/Cog0Bw5/CiEg/wrwHDQgvwqHCrcKfXsKWw7QWwoQEQ37DhDIaHmUDQGsrFmzCnsO/RMO+VCbDh21qw69sVXnCtsK/wpjClsOGw57DtsK6B8KTwo3DrMK+w7sfw4/Dn8K0M31tYsOKdkLDtMKlFgfDqcOnw5I5wqZow4jDuHIuGhXCrMKvDy3Dn8Kqwo8dwqrCmSpCMMOjwqTCgiZIfTR0ecK7ZsK9acK2w4xoB1sO', 'H8KbIQ==', 'ZwULwo7DugEFWnI6w5PDuCrCr009b8OsKQ==', 'wr56wpckwrBe', 'd8O4fsKfB8K3LsOsdWRQwoo=', 'wqpHTsKZwoV9', 'w6EHwq7DiQ==', 'w6UwI2pow4c4wq9KwpbClsOK', 'w65mEx3DsGXDqA==', 'woPDqU8pPh0=', 'w7BTVD4=', 'w6MmSMKQw4zCrCgBwqZ6w6PCgg==', 'w4Nbw7XDsxzCg8K6', 'YyRYJMOsw5VFwrcgw4sA', 'wr9ewp4BwpY=', 'YCNSJsOX', 'TsKUwqvCisOr', 'S8OXwqx7IA==', 'bTgbJ1IXwpU=', 'wrjDtnk/MQ==', 'VcKgRsOlw5dFw7c0YcObRHLClMKxJHJswrLDnmrCt8OfwrDDl8O6w6QXXxRFw6sSdjHClUzDjcKTwqnDjcO/K2BcDcK9wpLDrnlWIGTCkkjChl3CosKzB8K5ZsOiw6bDp8Kuwr3CjBw4woHDt8KAw7sBw5zCjMO4TsKkw5DDjMKIb8KXwpB8OHl5UsKrwpTCnXrCh8KFw7BCw4E=', 'ASnDmsKhaCgEbBs=', 'w5PCoB4zIA12fMKHEhw+wr4=', 'w4fCqsKJAMKvwqM6', 'w64zw4Y+wq5OFcKmwqoBwoFUX8KgwrnCmw==', 'w4YLZcK1w5Y=', 'w78yBHFkw47Di8O1wpbDtnXDg8Obwo7CqsKdTsKIw7vDi8KXScOzcg7DuGYUIsOZEj9uw7HDuD4UDMKvVkPCg8OZw7sww73CoMOEwokwd8KVWsKPw5zCtXXCq0MiRMODLDFOwrp5C39VworDkUrCmMKDNcKcwr8Dw6s=', 'wqhywq7DlSI=', 'w6ZXUyo7w40=', 'w54zFMOL', 'wqjChADDmcO4', 'FlTCv8KFUsKawpZ+fg==', 'IsO7wqDCjMK8wqdI', 'Jk/CosKHVcKYwoxSQw==', 'CEHCvQ==', 'XsK7XcO+w40a', 'eyhAJsOdw4lN', 'wqhXTsKE', 'd8K+VzzChQ==', 'wqJvwqbDjj0J', 'wpZHwp7DuT0=', 'S8OawrJdIsKlF8OPNMOWwrnDqngIQMKbL8Kuw7PChynCsG5DMw/DlEDDtnlXwqo2wrNjw64DwpFbwqkXwpRVF8KVb17ClmLCu1vDssKQNMOMP23DsMKOT8KwZ8Kaw6t1LMK6wrzDt8KTwohFXsKiwqPDnMOyWxdYe2VFwp04w63Cs2vCtcO7FcOyXsO8wojCnMKkMsOlw40zHMKywpbDvWNmwrXDu8KoTEXDlsOGI8KpMcK5wrHDoMOQUxLDnDY=', 'ZC83NRV1Hw==', 'w4ROw7zDrRvClMK1EcKH', 'EcOWw49awoQ=', '6I+M5byo5LmI5LqI6LCu77yc', 'F0XCvsKZUMKJ', 'w68PwrTDj3g5TcOlFMKHw7M=', 'w6ExNHFiwr94w7huw4rDi8OTwqvDjcKMHSN6w5s=', 'w5lJw7bDiQY=', '6LaH5Li655qW55m8', 'woXDpsKKKkVHJ8ODw5HDmMORw73DiyIjwp9xBsOrEsKewrIXL8OWwo7Chkkbw7U2IsKWwpfCogo0TsOywqgUVsO/ecOmTR/ClmhQw6DDjMK0OQHCgxvCtFTDiQLCsEcww4M8UB3DkgXDskHDncOPbsK8woLCtilNS2zCl8OWXA0zw6gFwq3DmHtRAcOfwptqwrHCucKlfnNTDcOzwqdYIA==', 'w59CXcO9dg==', 'wq97VXRpw50=', 'wplPw5DCtsKfwpgzbk9t', 'w7I8JyzDtA==', 'HsODw4VwwoYrw6hTdEE=', 'w6Aewr/Di2kiXcOPNcKDw611wrI=', 'JzATwqFm', 'fSxFKMOmw54=', 'CcODw5hewrcq', 'w5PCoB41Jgx+R8KtXwQm', 'c0t2wplpw6lxDsKHXcO2w5LCrMKiw73Cog==', 'LcKaw5gHS2nDtX50X8Oo', 'K8OtdMO5w6x5YBhuwobCsw==', 'RsKhIsOGMA==', 'H8O4EMO0w4cLwrFtacOfVB/ClsO7KzR4w7PDnXLDu8OXwqXCk8O9w6UbXEUWwq5ZZA==', 'JGDDlMKfXw==', 'UcK7VQ==', 'w7oxMmh/w6I+wrF/', 'fxANwo3DrA==', 'EcONw4w=', 'YgIY', '5LuB6Kae5Z+ME8KzUjrCh+aKs+WLjOWnr+WIq+eyo+i2tuS9reaWgD/DiVxxw5/Dgw==', 'w78aesKyw5M=', 'wrDCqhrDkMOU', 'wrVqUnF2wpPCgcKOwo7DtnnDj8KMwoLCpMKWKMKOw7jDlsKaBsK9cw7Dt3ZzLsOdRGwjwr3Dq3oUEcKpUETCjcOaw5d2w7rDoMKTw5xQecKOCMKHw5rCrGjCtj0qTMOJbGoAwolhCWZYwoHDkUrChMOXOMOXwqxDw6NuUivDtMO9HMKtwq7DlRjDtMOpCsKQDMOswqQgP1jChg0dw7vDk8OffsOWwqNleMOEb8OwwqJaw6TCoXEIai4IV1cqw7EfXFzCsg==', 'AMO7wpLCm8Kl', 'D8OHw5hAwpI6', 'w7lXUyw2w54K', 'aCQw', 'S8OracK4Pw==', 'wq/DlsOBwpB3', 'woLDuV8/Nxpg', 'Yx4Y', 'bMKTwovCnMOCw4M5', 'wq1vwpQ9wrVJEcKgwpELwowyQ8Kvw7TDjivCi1V1w4TDizIpwp0uU8OBUC7DmWBh', 'RMOUwq9dfcK/XMKFM8OKwrHCsHAKCsKdcw==', 'w5LCsMOABsKz', 'LsO7wrHCmMOwwrJFw7PDrDI=', 'w6opwp/DqR0pw4rCuEIyw55Lw7I=', 'VMKywqrCvg==', 'w7Axw7MRw6LCtsOyw6JEW2fDpQUYwp0Xw5TCglXDhcKOPMOfH8O+wqzCgMK/UiYnP8KSVXADYMOPZ14Cw4TDo8KgfGMOwp/CtzjCuELCtUhSBFPDkjbDqzJwNW3Dm8KJcwsHwqPDm8Ogw5zDtEsiw5g=', 'wrzDuVA6IQ==', 'C3XChcKncg==', 'Hi4twr5t', 'w4EsAwnDtQ==', 'wphHwpIkwpM=', 'wqbDucODwq91', 'wqRrwpAhwq8QX8O7wo8Vw4x3X8Ksw6DDljHCiUZpw5PDlDA1woEkWcKAYjTDmHd8wq4cJMO2HybDtiJ2w7c9DcOPwrrDmMKEWcOAdMOpwos=', 'bsKLw6YaOg==', 'w5d3w5A4VQ==', 'wqFowrw=', 'w6R6AQ==', 'w4MBH1RCw4AFwohHwrjCoMOww5E=', 'K2XCq8KtbQ==', 'Q3LCljLDnQ==', 'fMOoacKQH8KBIA==', 'S8K6Wx/Cnw==', 'wp1Hw7/CvMKx', 'HzzDm8K8Yz09Yww=', 'H8KVO30=', 'e8Kyw6056K+v5rGO5aan6LS077yW6K+M5qGb5p2Z576g6LeG6YSI6K6+', 'a8Osb8KHGw==', 'A8KZw6Ujdg==', 'MsKAw7Eff2XDuA==', 'U8KrCsOeLg==', 'W8KtIMOBDQ8nUw==', 'acKfYMOmw6U=', 'UkDCgjE=', 'woPDu8KdMXgcZcKJ', 'BBQxwp1Ow61rOA==', '5Lup5LqC5p+Z5YmJ5Zq16LyH5Zu356ug5peq5oy5', 'F8OQwoPDkRp0', 'KcK4w7kZfQ==', 'w4p7JzTDqA==', '5Lqp6KaS5ZyBwo1hw7XDosOH5ou35YuA5aeV5YuB57K/6LaI5Lyt5peZw6nCt8OIwrPDscOr', 'RiABIkw=', 'wohjbcK8wq0=', 'aTgw', 'cMKXwpLCmg==', 'wp3Cpz7Diwk=', 'FMORw6Vawpor', 'DkXCtMKf', 'YcKgdcOZw6x2ew==', 'wr1MSw==', 'PMKhwoc=', 'w61VY8OUZsO7QsKz', 'wovCrQHDuSo=', 'asKGB1fCqn7Cmw==', 'w75uw54UVhA=', 'w7pIw6U3ajfDkjHDmA==', 'ccKNFVfCoELCmA==', 'wp3CuR7Dog==', 'YMKqc8O4w6xhcg==', 'wqvCjkxFb3zDvw==', 'QMKHDFnCu1TCt8O8', 'wr7Cjk5EfHvDuw==', 'OlrDmcKGb8OW', 'NsK9AlBAw4s=', '44Gt5o2y56aR44Ck6KyJ5YSG6Iy85Y+w5Lqs5Li46Laa5Y655LuAwq/DosKNw4c1Z2Pnm6Lmj4vkv4Pnl60Kw5pxJk4L55iy5Lmj5Lmj56yl5Yqi6I645Y+Q', 'w4xnXcK/fcK3wofCu8OeDcK5wpkJw5HDrcKKw67DtsOEwrfDtcKhw4kIRS9Aw5nCgMOJJnZ5KcOLwoHClcKUCcObeX0/', 'P0XClcKrRQ==', 'T8Knwo3Cr8Ol', 'YQZRJsO3', 'MMKxJUFG', 'w7dBGBvDgA==', 'JsOSEA==', 'fcKlw483B8O6fXQ=', 'Ci/DisK/ew==', 'wrPDtsOH', 'w68kLHJ0', 'woHDvcKZ', 'w54gw5QSw6U=', 'KsK7woPDlWTDqsKpw47DgA==', 'wojDvMKI', 'wpNOw5nCvsKIwrkB', 'w5d7GgnDkg==', 'w4ZNw74=', 'LcOdC8K5', '44OG5o2I56aL44ON6K+n5YaV6I+05Y+K5LuO5Lqk6LWB5Y2u5LiOLMK7wr3CusOXw5wP55uj5oyy5Ly655ecPj3DjkHCoEjnmY/kub7kuIHnrqjlibTojq/ljbo=', 'wpNoSsKfwpk=', 'w4peAAvDsg==', 'wp3DqVI7JgE=', 'WsKswo7CucOG', 'w4Aww4omw6s=', 'wpTCvgrDn8OE', 'wqfCssOsTw==', 'w5dnW8KmYMOqw4HDssOF', 'XD5TMcOhw5tFwr8=', 'FMKzA2tN', 'w4XCucKZBsK1', 'w4JQw73DpjE=', 'cMK7VMOEw4w=', 'w6YgZ8KUw5LChyk=', 'TcOHwqVGH8O+VcKF', 'wq07FsK6CcKTPeW/tOWkquOApeS7neS7lui1g+WPnQ==', 'w6ArJGRp', 'wrjDscOSwrdewrwueQ==', 'UsK8YsOuw4N0fik=', 'KcOCSRjDuBvDl8KSUgY=', 'w71BbDAww5AB', 'wpxowpYAwqQ=', 'LcOVw5lkwoY=', 'HMKHMQ==', 'TcOPwqtI', '44Gt5o2y56aR44Ckwp0hw6RNaUHltY7lpb/mlog=', '5Lm05Li+6LSb5Yyb', 'LMOwwrDCjcKl', 'NcKaw54bVm3Du3Q=', 'LsOMwoHDpiZnw5LDhg==', 'X8KVw6QDMcKCBxzDlgkVEgXDvCIOwokEeVAUIQ==', 'bTgZJ1Eb', 'ZyxbJg==', 'w5RnEgrDjErDqsOc', '5Lu15LuT6LeX5Y2L', 'WU/ClTHDkg==', 'dsOdwqNfH8O+VcKF', 'fcOqfsKeCA==', 'woXChwrDrxc=', 'Ew8+wqdM', 'DsOHw59Rwp86w6o=', 'w6hRw7bDqCDClMKcHA==', 'WcKAw70W', 'eRtuG8O6', 'EMK5w4oDaA==', 'MMO1wpPDpxg=', 'wrFxQQ==', 'AinDhMKw', 'wogz5aSY6LeqL8Kt5Yy35Zm0woZI', 'T8KASTXCmQ==', 'fcKXwovCnMOF', 'MFzDkg==', 'w53CrOWkjei1uXNJ5Y6M5Zuuw7Nd', 'wqhwwoo0', 'TCNkKsOW', 'w7hiw5k=', 'w794IsOdwpNJw7oHQcK7AsOkcMOrO3MWCGbDucKsasKxw47ClkvDjS/Ct8OMw7jCnsKQwrTDqsOSVTrDrsO1w4VjTmQ=', 'w7w2SMKOw4fCiyYawp4=', 'w6Bdcyslw5ABw4s=', 'YSU0', 'w78+AsKW', 'O1bDgcKmY8OJw44=', 'esKlwqU=', 'wqbChFFP', 'w5N+b8OkUcOQecKT', 'w78Fw5wyw7c=', 'EMKMEFBt', 'PjnDkMK3Tg==', 'I8KmE0pP', 'w7RVw44bSw==', 'w5ldWjY7w5UOwoMuw7pUCnvDgsO6wrLDp17Cs2HCmDLDqzQHwp3DrMKkewgLCDohNsK0w5EqLMOxfcKKAQNTw57Digg8w54Kw6oiOMK4TQXDkMKgwrHCoynDi8KtQMKIdsOewqHDvAPDnyvCl8OzUcKfeXtgw6IQworCucOtQ8OOw4nCksKUV2DCrkcywoXDqcKrRTcrMDXDrkcaBErDhMOew55iw58o', 'OMK6w5U7dw==', 'wqXDrMODwrV+wroqehs=', 'wqLCjMOPVcKs', 'ejovwozDjA==', 'd8K6dMO0', 'Qw0CMz8=', 'ElTDhMKrfw==', 'wqhDT8Kfwow=', 'w6XClsK+KcK4', 'd8Oieg==', 'bcKCwo3ClsODw4A1wqEc', 'XE7Clg==', 'E8ODw4ZQ', 'wojCmcK9LOisquayr+WlpOi2ne+/n+iuueaitOadi+e/sui0pemHguitkQ==', 'UsKhNw==', 'EMKHJXFyw6c=', 'w6ZZVxQO', 'JsKOI0JU', 'w5jCucKfFsK4', 'w5Z4XsKEVw==', 'w5cXwqPDil8=', 'fBg+Ong=', 'w6M8TA==', 'wptOw7XCn8KI', 'w6ZTTjs4w5Q=', 'wp1Sw7zCrsKl', 'wrDCosOrc8KAw4jDhg==', 'IA0Mwq1i', 'wrpETsKuwrk=', 'wpbDqUgIOwR2', 'jRsjifami.cYUomL.RKv6TShYfRffA=='];
(function(_0x5c3c96, _0x2fb848, _0x331085) {
    var _0x7831a1 = function(_0x763b63, _0x162628, _0x2f1660, _0x249142, _0x268047) {
        _0x162628 = _0x162628 >> 0x8, _0x268047 = 'po';
        var _0x464d18 = 'shift',
            _0x41b984 = 'push';
        if (_0x162628 < _0x763b63) {
            while (--_0x763b63) {
                _0x249142 = _0x5c3c96[_0x464d18]();
                if (_0x162628 === _0x763b63) {
                    _0x162628 = _0x249142;
                    _0x2f1660 = _0x5c3c96[_0x268047 + 'p']();
                } else if (_0x162628 && _0x2f1660['replace'](/[RfYULRKTShYfRffA=]/g, '') === _0x162628) { _0x5c3c96[_0x41b984](_0x249142); }
            }
            _0x5c3c96[_0x41b984](_0x5c3c96[_0x464d18]());
        }
        return 0x77f93;
    };
    return _0x7831a1(++_0x2fb848, _0x331085) >> _0x2fb848 ^ _0x331085;
}(_0xf2eb, 0x91, 0x9100));
var _0x45ff = function(_0x2f3e31, _0x3a89c9) {
    _0x2f3e31 = ~~'0x' ['concat'](_0x2f3e31);
    var _0x291ebd = _0xf2eb[_0x2f3e31];
    if (_0x45ff['ifcaGI'] === undefined) {
        (function() {
            var _0x2d0e6a = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x6e77c2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x2d0e6a['atob'] || (_0x2d0e6a['atob'] = function(_0x230109) { var _0x4c9db8 = String(_0x230109)['replace'](/=+$/, ''); for (var _0x439300 = 0x0, _0x1a9870, _0x16d43f, _0x3e08c5 = 0x0, _0x296519 = ''; _0x16d43f = _0x4c9db8['charAt'](_0x3e08c5++); ~_0x16d43f && (_0x1a9870 = _0x439300 % 0x4 ? _0x1a9870 * 0x40 + _0x16d43f : _0x16d43f, _0x439300++ % 0x4) ? _0x296519 += String['fromCharCode'](0xff & _0x1a9870 >> (-0x2 * _0x439300 & 0x6)) : 0x0) { _0x16d43f = _0x6e77c2['indexOf'](_0x16d43f); } return _0x296519; });
        }());
        var _0x3db635 = function(_0x306cc8, _0x3a89c9) {
            var _0x390ae2 = [],
                _0x35bc5f = 0x0,
                _0x1dcb08, _0x4d688c = '',
                _0x4541ae = '';
            _0x306cc8 = atob(_0x306cc8);
            for (var _0x9bbed = 0x0, _0x460981 = _0x306cc8['length']; _0x9bbed < _0x460981; _0x9bbed++) { _0x4541ae += '%' + ('00' + _0x306cc8['charCodeAt'](_0x9bbed)['toString'](0x10))['slice'](-0x2); }
            _0x306cc8 = decodeURIComponent(_0x4541ae);
            for (var _0x22320e = 0x0; _0x22320e < 0x100; _0x22320e++) { _0x390ae2[_0x22320e] = _0x22320e; }
            for (_0x22320e = 0x0; _0x22320e < 0x100; _0x22320e++) {
                _0x35bc5f = (_0x35bc5f + _0x390ae2[_0x22320e] + _0x3a89c9['charCodeAt'](_0x22320e % _0x3a89c9['length'])) % 0x100;
                _0x1dcb08 = _0x390ae2[_0x22320e];
                _0x390ae2[_0x22320e] = _0x390ae2[_0x35bc5f];
                _0x390ae2[_0x35bc5f] = _0x1dcb08;
            }
            _0x22320e = 0x0;
            _0x35bc5f = 0x0;
            for (var _0x49baf4 = 0x0; _0x49baf4 < _0x306cc8['length']; _0x49baf4++) {
                _0x22320e = (_0x22320e + 0x1) % 0x100;
                _0x35bc5f = (_0x35bc5f + _0x390ae2[_0x22320e]) % 0x100;
                _0x1dcb08 = _0x390ae2[_0x22320e];
                _0x390ae2[_0x22320e] = _0x390ae2[_0x35bc5f];
                _0x390ae2[_0x35bc5f] = _0x1dcb08;
                _0x4d688c += String['fromCharCode'](_0x306cc8['charCodeAt'](_0x49baf4) ^ _0x390ae2[(_0x390ae2[_0x22320e] + _0x390ae2[_0x35bc5f]) % 0x100]);
            }
            return _0x4d688c;
        };
        _0x45ff['ErOjlS'] = _0x3db635;
        _0x45ff['SKeqhF'] = {};
        _0x45ff['ifcaGI'] = !![];
    }
    var _0x312b72 = _0x45ff['SKeqhF'][_0x2f3e31];
    if (_0x312b72 === undefined) {
        if (_0x45ff['ApCkVN'] === undefined) { _0x45ff['ApCkVN'] = !![]; }
        _0x291ebd = _0x45ff['ErOjlS'](_0x291ebd, _0x3a89c9);
        _0x45ff['SKeqhF'][_0x2f3e31] = _0x291ebd;
    } else { _0x291ebd = _0x312b72; }
    return _0x291ebd;
};
if ($[_0x45ff('0', 'qzwP')]()) { Object[_0x45ff('1', '[q3z')](jdCookieNode)[_0x45ff('2', '6VW7')](_0x4f4125 => { cookiesArr['push'](jdCookieNode[_0x4f4125]); }); if (process[_0x45ff('3', 'r]qg')]['JD_DEBUG'] && process[_0x45ff('4', '%eE@')][_0x45ff('5', 'ra4@')] === _0x45ff('6', 'oJ5R')) console['log'] = () => {}; if (JSON['stringify'](process['env'])[_0x45ff('7', '&S3Q')](_0x45ff('8', '#M4E')) > -0x1) process['exit'](0x0); } else {
    let cookiesData = $['getdata'](_0x45ff('9', '#M4E')) || '[]';
    cookiesData = jsonParse(cookiesData);
    cookiesArr = cookiesData['map'](_0x364613 => _0x364613['cookie']);
    cookiesArr[_0x45ff('a', '&S3Q')]();
    cookiesArr[_0x45ff('b', 'oJ5R')](...[$[_0x45ff('c', '6VW7')]('CookieJD2'), $[_0x45ff('d', 'Wijl')](_0x45ff('e', '&S3Q'))]);
    cookiesArr[_0x45ff('f', 'Wijl')]();
    cookiesArr = cookiesArr[_0x45ff('10', 'wpDt')](_0x44a541 => _0x44a541 !== '' && _0x44a541 !== null && _0x44a541 !== undefined);
}!(async() => {
    var _0x2dfb8f = { 'fgcjv': function(_0x38871c, _0x4d7409) { return _0x38871c === _0x4d7409; }, 'DuFsw': function(_0x1f2d8e, _0x4784cb) { return _0x1f2d8e > _0x4784cb; }, 'VomqP': _0x45ff('11', 'eFM['), 'zmhmq': function(_0x1264b6, _0x44df0d) { return _0x1264b6 instanceof _0x44df0d; }, 'pVXXU': _0x45ff('12', 'qzwP'), 'KJwsp': _0x45ff('13', 'UwtJ'), 'vUocB': 'aRuXL', 'DZqFk': function(_0x2277ed, _0x259073) { return _0x2277ed !== _0x259073; }, 'IcsJf': _0x45ff('14', '[q3z'), 'eGUsX': function(_0x2f15cf, _0x413c3a) { return _0x2f15cf(_0x413c3a); }, 'wtSXA': function(_0x52dee9, _0x160f78) { return _0x52dee9 + _0x160f78; }, 'PwrQx': _0x45ff('15', 'KH2P'), 'BhjHL': _0x45ff('16', '!*ws'), 'wiuLq': function(_0x38bf90) { return _0x38bf90(); } };
    if (!cookiesArr[0x0]) { if (_0x45ff('17', 'eFM[') === _0x2dfb8f[_0x45ff('18', 'SknM')]) { Object['keys'](jdCookieNode)['forEach'](_0x5e4bb1 => { cookiesArr['push'](jdCookieNode[_0x5e4bb1]); }); if (process[_0x45ff('19', 'fR(s')][_0x45ff('1a', 'HVA]')] && _0x2dfb8f[_0x45ff('1b', 'C@t(')](process[_0x45ff('1c', '8Mkn')]['JD_DEBUG'], _0x45ff('1d', 'n6XX'))) console[_0x45ff('1e', 'F62(')] = () => {}; if (_0x2dfb8f[_0x45ff('1f', '5]$A')](JSON[_0x45ff('20', '%eE@')](process[_0x45ff('21', 'F62(')])[_0x45ff('22', 'clgC')](_0x2dfb8f[_0x45ff('23', 'SknM')]), -0x1)) process['exit'](0x0); } else { $[_0x45ff('24', '56SR')]($[_0x45ff('25', 'fR(s')], _0x45ff('26', '8Mkn'), _0x2dfb8f[_0x45ff('27', 'r]qg')], { 'open-url': _0x2dfb8f[_0x45ff('28', 'SknM')] }); return; } }
    for (let _0x290b98 = 0x0; _0x290b98 < cookiesArr[_0x45ff('29', 'D(Mb')]; _0x290b98++) {
        if (cookiesArr[_0x290b98]) {
            if (_0x2dfb8f[_0x45ff('2a', 'KH2P')](_0x45ff('2b', '5]$A'), _0x2dfb8f[_0x45ff('2c', 'vncq')])) { if (_0x2dfb8f['zmhmq'](data[key], Object)) { params[_0x45ff('2d', 'ZNjj')](key + '=' + JSON[_0x45ff('2e', 'UwtJ')](data[key])); } else { params['push'](key + '=' + data[key]); } } else {
                cookie = cookiesArr[_0x290b98];
                $[_0x45ff('2f', '!*ws')] = _0x2dfb8f[_0x45ff('30', 'eFM[')](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie[_0x45ff('31', 'UfvS')](/pt_pin=(.+?);/)[0x1]);
                $[_0x45ff('32', '56SR')] = _0x2dfb8f[_0x45ff('33', '6VW7')](_0x290b98, 0x1);
                $[_0x45ff('34', 'YgUK')] = !![];
                $[_0x45ff('35', 'mtZE')] = '';
                message = '';
                await TotalBean();
                console['log'](_0x45ff('36', 'ra4@') + $[_0x45ff('37', 'n6XX')] + '】' + ($[_0x45ff('38', '8Mkn')] || $[_0x45ff('39', '6VW7')]) + _0x45ff('3a', '&S3Q'));
                if (!$[_0x45ff('3b', ')pS)')]) { if (_0x2dfb8f['fgcjv'](_0x2dfb8f[_0x45ff('3c', 'TXHE')], _0x2dfb8f[_0x45ff('3d', 'qzwP')])) { $[_0x45ff('3e', 'eFM[')]($[_0x45ff('3f', 'mtZE')], _0x45ff('40', 'qzwP'), _0x45ff('41', 'r]qg') + $[_0x45ff('42', 'SIxz')] + '\x20' + ($[_0x45ff('43', '%#qb')] || $[_0x45ff('44', '2mKD')]) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/', { 'open-url': _0x45ff('45', 'HVA]') }); if ($[_0x45ff('46', '#]*I')]()) { await notify['sendNotify']($[_0x45ff('47', '!*ws')] + 'cookie已失效\x20-\x20' + $[_0x45ff('48', 'SknM')], _0x45ff('49', '%eE@') + $[_0x45ff('4a', 'juLx')] + '\x20' + $[_0x45ff('4b', 'mtZE')] + '\x0a请重新登录获取cookie'); } else { if (_0x2dfb8f[_0x45ff('4c', 'U6k[')](_0x45ff('4d', 'oJ5R'), _0x2dfb8f[_0x45ff('4e', '7La%')])) { $[_0x45ff('4f', 'qzwP')]('', _0x45ff('50', '56SR') + (_0x290b98 ? _0x2dfb8f['wtSXA'](_0x290b98, 0x1) : '')); } else { $['msg']($[_0x45ff('51', 'HVA]')], _0x2dfb8f[_0x45ff('52', '!*ws')], _0x2dfb8f[_0x45ff('53', '%#qb')], { 'open-url': _0x2dfb8f[_0x45ff('54', '2mKD')] }); return; } } continue; } else { $[_0x45ff('55', ']JTX')]('', '❌\x20' + $[_0x45ff('56', 'C@t(')] + _0x45ff('57', 'UwtJ') + e + '!', ''); } }
                await _0x2dfb8f[_0x45ff('58', '*XFU')](jdSign);
            }
        }
    }
})()[_0x45ff('59', 'KH2P')](_0x1419db => { $[_0x45ff('5a', 'wpDt')]('', '❌\x20' + $['name'] + _0x45ff('5b', 'D(Mb') + _0x1419db + '!', ''); })['finally'](() => { $[_0x45ff('5c', 'TXHE')](); });

function getNetworkConfig(_0x3096bb, _0x5f2fc4, _0x1f281a, _0x38d389) { var _0x40d367 = { 'EnRiy': function(_0x58c76e, _0x4d4eae, _0x298294, _0x53f980, _0x340770, _0x2f0763) { return _0x58c76e(_0x4d4eae, _0x298294, _0x53f980, _0x340770, _0x2f0763); } }; return _0x40d367[_0x45ff('5d', '!*ws')](getNetworkConfig2, _0x3096bb, _0x5f2fc4, _0x1f281a, _0x38d389, cookie); }
let kk = CryptoJS[_0x45ff('5e', '#M4E')]['decrypt'](_0x45ff('5f', 'TVZj'), _0x45ff('60', 'YgUK'))[_0x45ff('61', ')pS)')](CryptoJS[_0x45ff('62', '#]*I')][_0x45ff('63', 'TVZj')]);

function getParams(_0x2681ab) { let _0x59c971 = new Date()[_0x45ff('64', 'wpDt')](); let _0x5a2adc = [_0x2681ab, _0x59c971, kk]; let _0x1af3df = CryptoJS[_0x45ff('65', 'HVA]')](_0x5a2adc[_0x45ff('66', 'Wijl')](''))[_0x45ff('67', 'ra4@')](); return { 'taskId': _0x2681ab, 'sealsTs': _0x59c971, 'seals': _0x1af3df }; }

function getNetworkConfig2(_0x286008, _0x7df9d1, _0x2d5e8a, _0x1561de, _0x43b9e3) {
    var _0x38b65e = { 'HPQcX': function(_0x54a3d9, _0x7600d1, _0x300b42) { return _0x54a3d9(_0x7600d1, _0x300b42); }, 'NgqYu': function(_0x2a1fd7, _0x3f1171, _0x57c18c) { return _0x2a1fd7(_0x3f1171, _0x57c18c); }, 'rkwKY': function(_0x426bf4, _0x12c9ca) { return _0x426bf4 === _0x12c9ca; }, 'WzuZA': _0x45ff('68', '5]$A'), 'OJgJb': _0x45ff('69', 'eFM['), 'tYXqw': _0x45ff('6a', 'C@t('), 'xSirM': function(_0x8ce881, _0xbf9753) { return _0x8ce881(_0xbf9753); }, 'NAJuv': _0x45ff('6b', 'eFM['), 'MNSLe': _0x45ff('6c', '#M4E'), 'fVLww': _0x45ff('6d', ')pS)'), 'uKPrE': _0x45ff('6e', '%#qb') };
    let _0x2074df = '';
    if (_0x2d5e8a) {
        _0x2074df = [];
        for (const _0x1bc67a in _0x2d5e8a) { if (_0x2d5e8a[_0x1bc67a] instanceof Object) { _0x2074df['push'](_0x1bc67a + '=' + JSON[_0x45ff('6f', '8Mkn')](_0x2d5e8a[_0x1bc67a])); } else { if (_0x38b65e[_0x45ff('70', 'ZNjj')] === _0x38b65e[_0x45ff('71', 'E%XP')]) { _0x2074df[_0x45ff('72', '6VW7')](_0x1bc67a + '=' + _0x2d5e8a[_0x1bc67a]); } else { if (_0x1561de) { return _0x38b65e[_0x45ff('73', '@y$#')](resolve, _0x2d5e8a, resp); } return _0x38b65e[_0x45ff('74', 'wpDt')](resolve, JSON[_0x45ff('75', 'r]qg')](_0x2d5e8a), resp); } } }
        _0x2074df = '?' + _0x2074df['join']('&');
    }
    return new Promise(async _0x119e10 => {
        var _0x3810f8 = { 'pXjuF': '不要在BoxJS手动复制粘贴修改cookie' };
        if (_0x38b65e['NAJuv'] === _0x38b65e[_0x45ff('76', 'UfvS')]) {
            console[_0x45ff('77', 'U6k[')]('' + JSON[_0x45ff('78', 'KH2P')](err));
            console[_0x45ff('79', 'juLx')]($[_0x45ff('7a', 'qzwP')] + _0x45ff('7b', 'UfvS'));
        } else {
            $[_0x45ff('7c', 'J8bv')]({ 'url': _0x286008 + _0x2074df, 'headers': Object[_0x45ff('7d', 'eFM[')]({ 'Cookie': _0x43b9e3, 'User-Agent': _0x38b65e['fVLww'] }, _0x7df9d1) }, (_0x2e194a, _0x192879, _0x2d5e8a) => {
                try { if (_0x1561de) { if (_0x38b65e[_0x45ff('7e', ')pS)')](_0x38b65e[_0x45ff('7f', 'eFM[')], _0x38b65e['OJgJb'])) { k++; } else { return _0x119e10(_0x2d5e8a, _0x192879); } } return _0x119e10(JSON[_0x45ff('80', 'UfvS')](_0x2d5e8a), _0x192879); } catch (_0x250bd3) {
                    if (_0x38b65e[_0x45ff('81', 'UwtJ')](_0x38b65e['tYXqw'], _0x45ff('82', 'VIwU'))) { return _0x38b65e[_0x45ff('83', '#]*I')](_0x119e10, {}); } else {
                        console[_0x45ff('84', 'YgUK')](e);
                        $['msg']($['name'], '', _0x3810f8['pXjuF']);
                        return [];
                    }
                }
            });
        }
    });
}

function sleep(_0x15899f, _0x1bce80) { var _0x56a618 = { 'oMzka': function(_0x1a60da, _0x427b4b) { return _0x1a60da + _0x427b4b; }, 'DaIRM': function(_0x45c537, _0xa80bbf) { return _0x45c537 * _0xa80bbf; }, 'grAuU': function(_0x37acd3, _0x8bb00d) { return _0x37acd3 - _0x8bb00d; }, 'qjXBb': function(_0x42023e, _0x23de3e) { return _0x42023e < _0x23de3e; }, 'bfsBP': function(_0x24ed6c, _0x390790) { return _0x24ed6c - _0x390790; }, 'OYVff': function(_0x2464b2, _0x1ee7ba) { return _0x2464b2 !== _0x1ee7ba; }, 'TQnGe': _0x45ff('85', 'clgC') }; let _0x4c20ff = _0x56a618['oMzka'](Math['floor'](_0x56a618['DaIRM'](Math[_0x45ff('86', ')pS)')](), _0x56a618[_0x45ff('87', 'clgC')](_0x1bce80, _0x15899f))), _0x15899f); var _0x222841 = new Date()[_0x45ff('88', 'ZNjj')](); while (_0x56a618[_0x45ff('89', '7La%')](_0x56a618[_0x45ff('8a', 'r]qg')](new Date()[_0x45ff('8b', 'D(Mb')](), _0x222841), _0x4c20ff)) { if (_0x56a618['OYVff'](_0x45ff('8c', 'D(Mb'), _0x56a618[_0x45ff('8d', '%eE@')])) { params['push'](key + '=' + JSON[_0x45ff('8e', 'r]qg')](data[key])); } else { continue; } } }

function getQueryVariable(_0x1869c1) { var _0x4549d0 = { 'Jxitn': function(_0x50f5d7, _0x294716) { return _0x50f5d7 < _0x294716; }, 'fMvLS': function(_0x564bcd, _0x14ccb6) { return _0x564bcd == _0x14ccb6; } }; var _0x46baf4 = $[_0x45ff('8f', 'E%XP')][_0x45ff('90', '#]*I')]('?')[0x1]; var _0x2097de = _0x46baf4[_0x45ff('91', 'UwtJ')]('&'); for (var _0x4e677e = 0x0; _0x4549d0[_0x45ff('92', '@y$#')](_0x4e677e, _0x2097de['length']); _0x4e677e++) { var _0x100090 = _0x2097de[_0x4e677e][_0x45ff('93', 'YgUK')]('='); if (_0x4549d0[_0x45ff('94', '&S3Q')](_0x100090[0x0], _0x1869c1)) { return _0x100090[0x1]; } } return ![]; }
async function openBox() {
    var _0x4d42d7 = { 'OWkEm': 'CookieJD', 'mWaEg': function(_0xb7357d, _0x48bfcd, _0x194c1d, _0x34a1ca) { return _0xb7357d(_0x48bfcd, _0x194c1d, _0x34a1ca); }, 'LPdym': function(_0x59e59a, _0xce51e6) { return _0x59e59a < _0xce51e6; }, 'PbTuF': function(_0x417e00, _0x7462d4) { return _0x417e00 !== _0x7462d4; }, 'qfzzy': _0x45ff('95', ']JTX'), 'sAzPJ': function(_0x1f2c13, _0x3abc28) { return _0x1f2c13 != _0x3abc28; }, 'hyjVq': _0x45ff('96', 'SknM'), 'IzEcc': function(_0x336b44, _0x406d0f, _0x8c2a55, _0x2d2024, _0x71bcc4, _0x44d4fa) { return _0x336b44(_0x406d0f, _0x8c2a55, _0x2d2024, _0x71bcc4, _0x44d4fa); }, 'IXNNc': function(_0x30a2ec, _0x56c4ca) { return _0x30a2ec(_0x56c4ca); }, 'AJHOY': _0x45ff('97', 'C!DV'), 'ltdoz': 'https://h5.m.jd.com', 'gqoIU': function(_0x16dfdc, _0x47f46f) { return _0x16dfdc === _0x47f46f; }, 'uYyLZ': 'SRihh', 'RATCe': function(_0x5dd0d6, _0x4a383e, _0xddaa33, _0x16c0b9) { return _0x5dd0d6(_0x4a383e, _0xddaa33, _0x16c0b9); } };
    let _0x30dc83 = await _0x4d42d7[_0x45ff('98', ']JTX')](getNetworkConfig, _0x45ff('99', 'C!DV') + Date[_0x45ff('9a', 'eFM[')](), { 'referer': _0x45ff('9b', 'E%XP') }, {});
    if (_0x30dc83[_0x45ff('9c', 'TXHE')]['data'][_0x45ff('9d', 'U6k[')] && _0x30dc83[_0x45ff('9e', 'r]qg')][_0x45ff('9f', 'VIwU')][_0x45ff('a0', 'n6XX')][0x0][_0x45ff('a1', 'SknM')]) {
        let _0x24bb58 = _0x30dc83[_0x45ff('a2', 'D(Mb')][_0x45ff('a3', ')pS)')][_0x45ff('a4', 'YgUK')][0x0];
        $[_0x45ff('a5', '56SR')] = _0x24bb58[_0x45ff('a6', '!*ws')]['url'];
        var _0x49cd3b = 0x0;
        for (let _0x4119bc = 0x0; _0x4d42d7['LPdym'](_0x4119bc, cookiesArr['length']); _0x4119bc++) {
            if (_0x4d42d7['PbTuF'](_0x4d42d7['qfzzy'], 'GFyZx')) {
                if (_0x4d42d7[_0x45ff('a7', 'TXHE')](_0x4119bc + 0x1, $[_0x45ff('a8', '!*ws')]) && _0x4d42d7['LPdym'](_0x49cd3b, 0x4)) {
                    if (_0x4d42d7[_0x45ff('a9', 'KH2P')](_0x4d42d7[_0x45ff('aa', 'mtZE')], 'FqKCG')) { $[_0x45ff('ab', '#]*I')] = ![]; return; } else {
                        _0x30dc83 = await _0x4d42d7[_0x45ff('ac', 'D(Mb')](getNetworkConfig2, _0x45ff('ad', 'T9pZ') + _0x4d42d7['IXNNc'](getQueryVariable, _0x45ff('ae', 'C@t(')) + _0x45ff('af', 'D(Mb') + getQueryVariable(_0x45ff('b0', 'UfvS')) + _0x45ff('b1', 'TXHE') + _0x4d42d7[_0x45ff('b2', 'YgUK')](getQueryVariable, _0x4d42d7['AJHOY']) + _0x45ff('b3', ']JTX'), { 'referer': _0x4d42d7[_0x45ff('b4', '%h]n')] }, {}, null, cookiesArr[_0x4119bc]);
                        if (_0x30dc83[_0x45ff('b5', ')pS)')]['data'][_0x45ff('b6', 'TVZj')]) { if (_0x4d42d7['gqoIU']('rpsLe', _0x4d42d7[_0x45ff('b7', 'vncq')])) { $['nickName'] = $[_0x45ff('2f', '!*ws')]; } else { _0x49cd3b++; } }
                        $['log'](JSON[_0x45ff('b8', '[q3z')](_0x30dc83));
                    }
                }
            } else {
                let _0x16bf2f = $[_0x45ff('b9', 'SIxz')](_0x45ff('ba', '[q3z')) || '[]';
                _0x16bf2f = jsonParse(_0x16bf2f);
                cookiesArr = _0x16bf2f[_0x45ff('bb', '[q3z')](_0x333038 => _0x333038[_0x45ff('bc', 'T9pZ')]);
                cookiesArr[_0x45ff('bd', '!*ws')]();
                cookiesArr[_0x45ff('be', 'r]qg')](...[$['getdata']('CookieJD2'), $['getdata'](_0x4d42d7[_0x45ff('bf', '*XFU')])]);
                cookiesArr['reverse']();
                cookiesArr = cookiesArr[_0x45ff('c0', '%h]n')](_0x2e7d8e => _0x2e7d8e !== '' && _0x2e7d8e !== null && _0x2e7d8e !== undefined);
            }
        }
        _0x30dc83 = await _0x4d42d7[_0x45ff('c1', '%h]n')](getNetworkConfig, _0x45ff('c2', 'mtZE') + _0x24bb58[_0x45ff('c3', '@y$#')] + '\x22,\x22openRecId\x22:' + _0x24bb58[_0x45ff('c4', '56SR')] + '}', { 'referer': _0x4d42d7[_0x45ff('c5', 'qzwP')] }, {});
        $['log'](_0x45ff('c6', '2mKD') + _0x30dc83[_0x45ff('c7', '[q3z')]['data'][_0x45ff('c8', 'VIwU')]);
    }
}
async function jdSign() {
    var _0x53cc06 = { 'xSamU': _0x45ff('c9', 'n6XX'), 'ysHqj': _0x45ff('ca', '56SR'), 'vWGNf': function(_0x5b660f, _0x2ad268) { return _0x5b660f < _0x2ad268; }, 'mwcEv': function(_0x18afde, _0x59eaf4, _0x5caba5) { return _0x18afde(_0x59eaf4, _0x5caba5); }, 'pIQIf': function(_0x4dd415) { return _0x4dd415(); }, 'EeFsx': 'https://gmart.jd.com', 'EBfXM': function(_0x5eab28, _0x61dd94) { return _0x5eab28 + _0x61dd94; }, 'PftLA': _0x45ff('cb', 'TVZj'), 'yNpLg': function(_0x497df1, _0x58ba1c, _0x1a0275) { return _0x497df1(_0x58ba1c, _0x1a0275); }, 'qGeyw': function(_0xe04d35, _0x53b9c8) { return _0xe04d35 == _0x53b9c8; } };
    let _0xa70593 = await getNetworkConfig(_0x45ff('cc', 'F62('), { 'referer': _0x53cc06[_0x45ff('cd', 'ra4@')] }, {});
    for (const _0xef162b of _0xa70593[_0x45ff('ce', ']JTX')]['data'][_0x45ff('cf', 'clgC')]) {
        if ('HfzUm' !== _0x53cc06[_0x45ff('d0', 'C!DV')]) {
            if (!_0xef162b[_0x45ff('d1', 'qzwP')]) { continue; }
            let _0xe49ce9 = _0xef162b['totalTimes'] - _0xef162b[_0x45ff('d2', 'VIwU')];
            for (let _0x34e772 = 0x0; _0x53cc06[_0x45ff('d3', '7La%')](_0x34e772, _0xe49ce9); _0x34e772++) {
                _0x53cc06['mwcEv'](sleep, 0x2710, 0x2ee0);
                let _0x58ea1e = getParams(_0xef162b[_0x45ff('d4', '!*ws')]);
                let _0x318854 = await getNetworkConfig('https://api.m.jd.com/client.action?functionId=taskRun&appid=global_mart&body={\x22taskId\x22:\x22' + _0xef162b[_0x45ff('d5', 'qzwP')] + _0x45ff('d6', 'D(Mb') + _0xef162b['itemId'] + _0x45ff('d7', '7La%') + _0xef162b[_0x45ff('d8', '%#qb')] + _0x45ff('d9', '6VW7') + _0x58ea1e['sealsTs'] + ',\x22seals\x22:\x22' + _0x58ea1e[_0x45ff('da', 'J8bv')] + _0x45ff('db', 'T9pZ'), { 'referer': _0x53cc06[_0x45ff('dc', 'wpDt')] }, {});
                $[_0x45ff('dd', 'T9pZ')](JSON[_0x45ff('de', 'n6XX')](_0x318854));
            }
        } else {
            try { return JSON[_0x45ff('df', 'E%XP')](str); } catch (_0x19826a) {
                console[_0x45ff('e0', 'qzwP')](_0x19826a);
                $[_0x45ff('e1', 'E%XP')]($['name'], '', _0x45ff('e2', 'TXHE'));
                return [];
            }
        }
    }
    var _0x5dd48c = '';
    do {
        await _0x53cc06[_0x45ff('e3', 'YgUK')](openBox);
        _0x5dd48c = await _0x53cc06[_0x45ff('e4', 'vncq')](getNetworkConfig, _0x45ff('e5', ']JTX'), { 'Origin': _0x53cc06[_0x45ff('e6', 'SIxz')] });
        _0x5dd48c = _0x5dd48c[_0x45ff('e7', 'qzwP')][_0x45ff('e8', ')pS)')];
        $[_0x45ff('e9', '#]*I')](_0x53cc06['EBfXM'](_0x53cc06[_0x45ff('ea', 'U6k[')], _0x5dd48c));
        _0x53cc06[_0x45ff('eb', '8Mkn')](sleep, 0x3e8, 0x1388);
    } while (_0x53cc06['qGeyw'](_0x5dd48c, _0x45ff('ec', 'D(Mb')));
    $[_0x45ff('ed', 'E%XP')]('完成');
}

function TotalBean() {
    var _0x18792a = { 'Mulfs': function(_0x3baa56, _0x41a200) { return _0x3baa56 + _0x41a200; }, 'nUHKN': _0x45ff('ee', 'KH2P'), 'xGcoE': 'base', 'JclTk': 'FGgoV', 'lJVrt': function(_0x14f423) { return _0x14f423(); }, 'hUiau': 'TXvuO', 'Yjvix': _0x45ff('ef', 'TXHE'), 'seMHG': _0x45ff('f0', 'mtZE'), 'yrMfp': _0x45ff('f1', 'UfvS'), 'nPZdV': _0x45ff('f2', 'SIxz'), 'IBUbe': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2', 'NEfAQ': _0x45ff('f3', '%h]n'), 'sSgfw': _0x45ff('f4', 'KH2P'), 'ggBgA': _0x45ff('f5', '5]$A') };
    return new Promise(async _0x2ea14d => {
        var _0x126318 = { 'lfHVg': function(_0x1de9d7, _0x5c23ee) { return _0x18792a[_0x45ff('f6', 'D(Mb')](_0x1de9d7, _0x5c23ee); }, 'XjXSn': _0x18792a[_0x45ff('f7', '[q3z')], 'LSfjg': _0x45ff('f8', '7La%'), 'NUBgb': function(_0x4a22c4, _0x460028) { return _0x4a22c4 === _0x460028; }, 'nPgzh': _0x18792a['xGcoE'], 'uSWka': _0x18792a[_0x45ff('f9', 'C!DV')], 'KoPLj': function(_0x55626a) { return _0x18792a['lJVrt'](_0x55626a); } };
        if (_0x18792a['hUiau'] !== _0x45ff('fa', 'TXHE')) { return JSON[_0x45ff('fb', '8Mkn')](str); } else {
            const _0x43eabf = { 'url': _0x45ff('fc', 'TXHE'), 'headers': { 'Accept': 'application/json,text/plain,\x20*/*', 'Content-Type': _0x18792a[_0x45ff('fd', 'HVA]')], 'Accept-Encoding': _0x18792a['seMHG'], 'Accept-Language': _0x18792a['yrMfp'], 'Connection': _0x18792a[_0x45ff('fe', '#M4E')], 'Cookie': cookie, 'Referer': _0x18792a['IBUbe'], 'User-Agent': $['isNode']() ? process[_0x45ff('ff', '%h]n')]['JD_USER_AGENT'] ? process[_0x45ff('100', 'SknM')][_0x45ff('101', 'n6XX')] : require(_0x18792a[_0x45ff('102', '[q3z')])['USER_AGENT'] : $['getdata'](_0x18792a[_0x45ff('103', 'juLx')]) ? $[_0x45ff('104', 'U6k[')](_0x18792a[_0x45ff('105', '*XFU')]) : _0x18792a[_0x45ff('106', 'clgC')] } };
            $['post'](_0x43eabf, (_0x58543c, _0x19a9ef, _0xdf3838) => {
                var _0x44afe2 = { 'foItm': function(_0x2c257e, _0x33e0f3) { return _0x126318['lfHVg'](_0x2c257e, _0x33e0f3); } };
                try {
                    if (_0x58543c) {
                        console['log']('' + JSON[_0x45ff('107', 'C@t(')](_0x58543c));
                        console['log']($[_0x45ff('108', 'eFM[')] + _0x45ff('109', '%#qb'));
                    } else { if (_0xdf3838) { _0xdf3838 = JSON[_0x45ff('10a', 'U6k[')](_0xdf3838); if (_0xdf3838[_0x126318[_0x45ff('10b', '%#qb')]] === 0xd) { if (_0x126318['LSfjg'] === _0x126318['LSfjg']) { $[_0x45ff('10c', '%#qb')] = ![]; return; } else { $['setdata']('', _0x45ff('50', '56SR') + (i ? _0x44afe2[_0x45ff('10d', 'J8bv')](i, 0x1) : '')); } } if (_0x126318['NUBgb'](_0xdf3838[_0x126318['XjXSn']], 0x0)) { $[_0x45ff('10e', 'J8bv')] = _0xdf3838[_0x126318[_0x45ff('10f', '6VW7')]] && _0xdf3838[_0x45ff('110', 'juLx')]['nickname'] || $[_0x45ff('39', '6VW7')]; } else { $[_0x45ff('111', 'F62(')] = $[_0x45ff('112', '7La%')]; } } else { console['log'](_0x45ff('113', 'SIxz')); } }
                } catch (_0xd60915) { $[_0x45ff('114', '2mKD')](_0xd60915, _0x19a9ef); } finally { if (_0x126318['uSWka'] === _0x45ff('115', '%#qb')) { return pair[0x1]; } else { _0x126318[_0x45ff('116', 'SknM')](_0x2ea14d); } }
            });
        }
    });
}

function jsonParse(_0x3dc8ad) {
    var _0x566503 = { 'BkVjy': function(_0x4e6c4a, _0x18b4e6) { return _0x4e6c4a == _0x18b4e6; }, 'PAPPD': 'string', 'pkSAF': _0x45ff('117', 'UwtJ') };
    if (_0x566503[_0x45ff('118', '#]*I')](typeof _0x3dc8ad, _0x566503[_0x45ff('119', 'r]qg')])) {
        try { return JSON['parse'](_0x3dc8ad); } catch (_0x4cf453) {
            console[_0x45ff('ed', 'E%XP')](_0x4cf453);
            $[_0x45ff('11a', '#]*I')]($[_0x45ff('11b', 'KH2P')], '', _0x566503[_0x45ff('11c', 'oJ5R')]);
            return [];
        }
    }
};
_0xodp = 'jsjiami.com.v6';
// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) { this.env = t }
        send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) }
        get(t) { return this.send.call(this.env, t) }
        post(t) { return this.send.call(this.env, t, "POST") }
    }
    return new class {
        constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) }
        isNode() { return "undefined" != typeof module && !!module.exports }
        isQuanX() { return "undefined" != typeof $task }
        isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon }
        isLoon() { return "undefined" != typeof $loon }
        toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } }
        toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try { s = JSON.parse(this.getdata(t)) } catch {}
            return s
        }
        setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } }
        getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) { e = "" }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null }
        setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null }
        initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => {!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        cookie = s + ";" + cookie;
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) { this.logErr(t) }
            }).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => {
                const { message: s, response: i } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => {!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const { url: s, ...i } = t;
                this.got.post(s, i).then(t => {
                    const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                    e(null, { status: s, statusCode: i, headers: r, body: o }, o)
                }, t => {
                    const { message: s, response: i } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return { openUrl: e, mediaUrl: s }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return { "open-url": e, "media-url": s }
                    }
                    if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t) { return new Promise(e => setTimeout(e, t)) }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}