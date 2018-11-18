var countDownDate = new Date("DEC 1, 2018 20:00:00").getTime();
var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById('cd_time').innerHTML = days + "d" + hours + "h" + minutes + "m" +seconds + "s";
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('cd_time').innerHTML = "EXPIRED"
            }
            }, 1000);
