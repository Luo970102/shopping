$(function () {

    $('#demo').fullpage({

        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {

            // 谁滚出来，就让谁加animation这个类，让其他没滚出来的移除animation这个类
            $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');

            // 不管是哪一屏滚出来，都先让所有屏的jQuery动画复原
            // $('.section2>div div').removeAttr('style');
            // $('.section2>div img').removeAttr('style');
            // $('.section4>div div').removeAttr('style');

            // 不管是哪一屏滚出来先把所有屏里的div和img的jQuery动画复原
            $('.section>div div,.section>div img').stop().removeAttr('style');

            // 滚出其他屏不要动画，所以做判断
            if (index == 2) {

                $('.section2 .search01').animate({
                    marginLeft: -111
                }, 1000, 'easeOutBack', function () {

                    //动画完成隐藏search01
                    $('.section2 .search01').hide();

                    //显示出search02并往上走
                    $('.section2 .search02').show().delay(500).animate({

                        marginLeft: 100,
                        marginBottom: 448,
                        width: 160

                    }, 1000);

                    // 它们是同时进行的：沙发放大
                    $('.section2 .sofas').delay(500).animate({
                        width: 441
                    }, 1000);
                });

            } else if (index == 4) {

                $('.section4 .carBox').animate({

                    marginLeft: 2000

                }, 3000, 'easeInElastic', function () {

                    //让键盘淡入
                    $('.section4 .keyboard').animate({
                        opacity: 1
                    }, 1000);

                });
            } else if (index == 6) {

                $('.section6 .gift').animate({
                    top: 10
                }, 1000, function () {

                    //让车动起来
                    $('.section6 .street').animate({

                        backgroundPositionX: -1300
                    }, 2500, function () {

                        // 车停让人出来
                        $('.section6 .man').animate({
                            height: 140

                        }, 1000, function () {

                            // 车出来后往右走
                            $('.section6 .man').animate({
                                right: -200

                            }, 1000, function () {

                                //人走完后，开门
                                $('.section6 .door').show();
                                // delay只是针对动画做延迟！而show是动画吗？不是！没用！
                                // delay在animate或者fadein fadeout里这些都有用
                                // $('.section6 .girl').delay(500).show();

                                setTimeout(function () {

                                    $('.section6 .girl').show();
                                }, 500);
                            });
                        });
                    });

                });


            }
        }
    });

    // 给第八屏加事件
    $('.section8').mousemove(function (e) {

        $('.section8 .hand').css('left', e.pageX - 65);
        $('.section8 .hand').css('top', e.pageY - 10);

    });

    // 再来一次的点击事件
    $('.section8 .again').click(function () {

        // 让fullpage回到哪一屏去
        $.fn.fullpage.moveTo(1);
    });


})