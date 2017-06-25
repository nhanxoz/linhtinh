// thanh vien vip
var vip_qz = 01;
if (paidmember()) {
    vip_qz = 1;
}
isIOS = false;
var qz_path_img = "/file/dungchung/quiz_common/images/";
var msg_vip_trans = 'Bạn phải là <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyền lợi thành viên VIP"  style="color:#0d6af7;" target="_blank" >thành viên VIP</a> của TiếngAnh123.Com mới có thể xem được lời dịch hiện ở đây';
var msg_vip_bg = 'Bạn phải là <a title="Quyền lợi của thành vien VIP" href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank">thành viên VIP</a> của TiengAnh123.com mới được học tiếp  bài học này !';
var msg_vip_sb = 'Bạn phải là <a title="Quyền lợi của thành vien VIP" href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank">thành viên VIP</a> của TiengAnh123.com mới được làm tiếp bài này !';

var ur_qz = ['/file/dungchung/quiz_common/js/jquery.tinyscrollbar.min.js', '/file/dungchung/controlAudio.js', '/file/dungchung/quiz_common/load/qzAction.js'];
function loadScript(urls, id) {
    for (lik123 in urls) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = urls[lik123];
        var x = document.getElementById(id);
        x.appendChild(s);
    }
}

$(document).ready(function() {
    $('.qz_loading').remove();
    $('.qz_part').show();
    loadScript(ur_qz, "load_file_js");
    if (qz_urls) {
        loadScript(qz_urls, "load_file_js");
    }

    // add type
    $('.qz_st1').after('<div class="stt_page_type" sub="1" item_type=""></div>');
    $('.qz_sort_drop').parents('.qz_st1').next().text('Sequence').attr('sub', '0').attr('item_type', 'Sequence');
    $('.qz_blank').parents('.qz_st1').next().text('Fill in the blank').attr('sub', '0').attr('item_type', 'Fill in the blank');
    $('.stt_mat_drop').parents('.qz_st1').next().text('Matching').attr('sub', '0').attr('item_type', 'Matching');
    $('.qz_radio').parents('.qz_st1').next().text('Multiple choice').attr('sub', '0').attr('item_type', 'Multiple choice');
    $('.qz_check_ic').parents('.qz_st1').next().text('Checkbox').attr('sub', '0').attr('item_type', 'Checkbox');
    $('.m_qz_content').after('<div class="stt_page_type" sub="0" item_type="Click map">Click map</div>');

    $('.qz_title_copy').parent().append('<div class="qz_cpr_popup"><div class="qz_cpr_top">Bản quyền nội dung bài học thuộc về Tienganh123.com</div><div class="qz_cpr_bottom"><div> <span style="color:#3f3f3f;" ></span> BeOnline Co., Ltd.</div><div><span style="color:#3f3f3f;"  >Email: </span> admin@beonline.com.vn</div></div></div>');
    $('.qz_title_copy').hover(function() {
        $(this).next().fadeIn(300);
    }, function() {
        $(this).next().fadeOut(100);
    });
    $('.qz_title_copy').click(function() {
        $(this).next().fadeIn(100);
    });
    $('*').not('.qz_title_copy').bind('click', function() {
        $('.qz_cpr_popup').fadeOut(100);
    });
    $('.qz_tbao').after('<div class="qz_feedback_show"></div>');

    // control next
    $('.qz_next').attr('ctrl_next', 'find');
    $('.qz_next').each(function(j) {
        var num = $('.qz_num:eq(' + j + ')').text();
        var score = $('.qz_total_score:eq(' + j + ')').text();
        var mini_score = $('.qz_mini_score:eq(' + j + ')').text();
        var title = '';
        var txt = '';
        that = this;
        if (vip_qz == 0) {
            $('.qz_box:eq(' + (2 * j + 1) + ') .qz_content').each(function(i) {
                if (i < 2) {
                    txt = $(this).find('p').text();
                    if (txt == '') {
                        txt = "Question " + (i + 1);
                    }
                    title += '<div class="qz_outmd_row qz_outline_item" inx="' + j + '"><div class="qz_outmc_text"><strong style="margin-right:20px;">' + (i + 1) + '.</strong>' + txt + '</div><div class="qz_outmc_tf"></div><div class="qz_outmc_scores">0/10</div></div>';
                }

            });
            title += '<div class="qz_pop_layout qz_pop_layout1">' + msg_vip_sb + '<br /><br /><a title="Quyền lợi của thành vien VIP" href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank"><span class="qz_pop_bt">Đăng ký thành viên VIP</span></a><br /><br /></div></div>';
            $(that).parent().after('<div class="qz_pop qz_outline qz_outline_bt"></div>');
            $(that).parent().next().html('<div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1">Danh sách câu hỏi</div><div class="qz_outline_title2">Kết quả</div><div class="qz_outline_title3">Điểm</div><div class="qz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="viewport"><div class="overview qz_outline_list">' + title + '</div></div></div></div><div class="qz_outline_bottom"><div class="qz_ou_bt_item" style="border:none;">Đang làm đến câu <span class="orange qz_ques_inx">1</span></div><div class="qz_ou_bt_item">Số câu trả lời đúng <span class="orange"><span class="qz_ques_inx_t">0</span>/' + num + '</span></div><div class="qz_ou_bt_item">Tổng điểm <span class="orange"><span class="qz_score_inx">0</span>/' + score + '</span></div><div class="qz_ou_bt_item">Điểm yêu cầu <span class="orange qz_score_min">' + mini_score + '</span></div></div></div></div></div>');
        } else {
            $('.qz_box:eq(' + (2 * j + 1) + ') .qz_content').each(function(i) {
                txt = $(this).find('p').text();
                if (txt == '') {
                    txt = "Question " + (i + 1);
                }
                title += '<div class="qz_outmd_row qz_outline_item" inx="' + j + '"><div class="qz_outmc_text"><strong style="margin-right:20px;">' + (i + 1) + '.</strong>' + txt + '</div><div class="qz_outmc_tf"></div><div class="qz_outmc_scores">0/10</div></div>';

            });
            $(that).parent().after('<div class="qz_pop qz_outline qz_outline_bt"></div>');
            $(that).parent().next().html('<div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1">Danh sách câu hỏi</div><div class="qz_outline_title2">Kết quả</div><div class="qz_outline_title3">Điểm</div><div class="qz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview qz_outline_list">' + title + '</div></div></div></div><div class="qz_outline_bottom"><div class="qz_ou_bt_item" style="border:none;">Đang làm đến câu <span class="orange qz_ques_inx">1</span></div><div class="qz_ou_bt_item">Số câu trả lời đúng <span class="orange"><span class="qz_ques_inx_t">0</span>/' + num + '</span></div><div class="qz_ou_bt_item">Tổng điểm <span class="orange"><span class="qz_score_inx">0</span>/' + score + '</span></div><div class="qz_ou_bt_item">Điểm yêu cầu <span class="orange qz_score_min">' + mini_score + '</span></div></div></div></div>');

        }
        $('.qz_outline_list:eq(' + j + ') .qz_outline_item:eq(0)').addClass('qz_ol_active');
    });
    $('.qz_outline_item').click(function() {
        var ink = $(this).attr('inx');
        $('.qz_outline_list:eq(' + ink + ') .qz_outline_item').removeClass('qz_ol_active');
        $(this).addClass('qz_ol_active');
        $('.qz_outline_bt:eq(' + ink + ')').fadeOut(200);
        var index = $(this).index('.qz_outline_list:eq(' + ink + ') .qz_outline_item');
        var stt = parseInt(index) + 1;
        $('.qz_ques_inx:eq(' + ink + ')').text(stt);
        $('.box_curr_' + ink).hide().removeClass('box_curr_' + ink);
        $('.box_current_' + ink + ' .qz_content:eq(' + index + ')').addClass('box_curr_' + ink).show();
        toPos('.box_current_' + ink);
        var type_ = $('.box_curr_' + ink + ' .stt_page_type').attr('item_type');
        $('.box_current_' + ink + ' .qz_type').text(type_);
        if ($('.box_curr_' + ink + ' .stt_page_type').text() == '') {
            $('.qz_next:eq(' + ink + ')').show();
            $('.qz_submit:eq(' + ink + ')').hide();
        } else {
            $('.qz_next:eq(' + ink + ')').hide();
            $('.qz_submit:eq(' + ink + ')').show();
        }
        $('.qz_content_end:eq(' + ink + ')').hide();
        $('.jquery_jplayer_long').each(function(i) {
            addAudioLong(this, i, isIOS);
        });
        $('.box_current_' + ink + ' .qz_inx').text((index + 1));
        status_ques = $('.box_curr_' + ink).attr('status_ques');
        if ($('.box_curr_' + ink).attr('status_ques')) {
            str_feedback = $('.box_curr_' + ink + ' .qz_feedback').html();
            if ($('.box_curr_' + ink + ' .qz_feedback').length == 1) {
                str_feedback = $('.box_curr_' + ink + ' .qz_feedback').html();
                $('.box_current_' + t + ' .qz_feedback_show').html(str_feedback);
            } else {
                $('.box_current_' + t + ' .qz_feedback_show').html('');
            }
        } else {
            $('.box_current_' + t + ' .qz_feedback_show').html('');
        }

        if ($('.box_curr_' + ink).attr('status_ques')) {
            if (status_ques == 't') {
                $('.box_current_' + ink + ' .qz_st_anstatus').html('Your answer : <span class="qz_cor">Correct </span>');
                $('.box_current_' + ink + ' .qz_tbao .qz_st2_tick').html('<img src="' + qz_path_img + 'correct_icon.png" style="widht:14px; height:14px" />');

            } else {
                $('.box_current_' + ink + ' .qz_st_anstatus').html('Your answer : <span class="qz_incor">Incorrect </span>');
                $('.box_current_' + ink + ' .qz_tbao .qz_st2_tick').html('<img src="' + qz_path_img + 'incorrect_icon.png" style="widht:14px; height:14px" />');
            }
        } else {
            $('.box_current_' + ink + ' .qz_st_anstatus').html('');
            $('.box_current_' + ink + ' .qz_tbao .qz_st2_tick').html('');
        }
        $('.box_current_' + ink + ' .qz_st2_answer').css("padding-left", "0px");
        $('.box_current_' + t + ' .qz_feedback_show').css('visibility', 'visible');
        $('.box_curr_' + ink).tinyscrollbar();
        changeBg(ink);
    });
    $('.qz_ouclose').click(function() {
        $(this).parents('.qz_outline').fadeOut(200);
    });
    $('.stt_mat_drag').css("position", 'absolute');
    $('table tr').css('background', 'none');
    var mat_drag_top = 0;
    var mat_drag_left = 0;
    $('.qz_next').attr('nclick', '0');
    $('.qz_content').each(function() {
        $(this).find('.qz_sort_drop');
    });

    // matching	
    if ($('.stt_mat_drag').length > 0) {
        var ok_drop = 1;
        $(".stt_mat_drag").draggable({
            start: function(event, ui) {
                event.stopPropagation();
                mat_drag_top = $(this).css('top');
                mat_drag_left = $(this).css('left');
            },
            drag: function(event, ui) {
                $(this).css('z-index', '200');
                ok_drop = 1;
                if ($('.drag-hover').length > 1) {
                    var inx_drag = parseInt($(ui.draggable).attr('inx'));
                    var top_drag = inx_drag * 55 + 'px';
                    $(ui.draggable).animate({
                        top: top_drag,
                        left: '0px'
                    }, 300);
                    ok_drop = 0;
                }
            },
            stop: function() {
                $(this).css('z-index', '0');
                if ($(this).attr('draged')) {} else {
                    var inx_drag = parseInt($(this).attr('inx'));
                    var top_drag = inx_drag * 55 + 'px';
                    $(this).animate({
                        top: top_drag,
                        left: '0px'
                    });
                }
            }
        });
        $('.stt_mat_drop').droppable({
            accept: ".stt_mat_drag",
            hoverClass: "drag-hover",
            tolerance: "touch",
            drop: function(event, ui) {
                event.stopPropagation();
                if (ok_drop == 1) {
                    var inx_drop = parseInt($(this).attr('inx'));
                    var top_drop = inx_drop * 55 + 'px';
                    var inx_drag = parseInt($(ui.draggable).attr('inx'));
                    var top_drag = inx_drag * 55 + 'px';
                    var drop = $(this).attr('drop');
                    var drag = $(ui.draggable).attr('drag');
                    $(this).attr('droped', drag);
                    $(ui.draggable).css('z-index', '0');
                    var k = $(this).parents('.qz_match_drop').index('.qz_match_drop');
                    that = this;

                    $('.qz_match_drag:eq(' + k + ') .stt_mat_drag[draged=' + drop + ']').css('z-index', '0').not(ui.draggable).animate({
                        top: top_drag,
                        left: '0px'
                    }, 400).attr('inx', inx_drag).removeAttr('draged');

                    $(ui.draggable).attr('inx', inx_drop);
                    $(ui.draggable).animate({
                        top: top_drop,
                        left: '-25px'
                    }, 300);
                    $(ui.draggable).attr('draged', drop);
                    $('.qz_match_drag:eq(' + k + ') .stt_mat_drag[inx=' + inx_drop + ']').css('z-index', '0').not(ui.draggable).animate({
                        top: top_drag,
                        left: '0px'
                    }, 400).attr('inx', inx_drag);
                }
            },
            over: function(event, ui) {
                $(ui.draggable).removeAttr('draged');
            }
        });
    }
    $(document).mousedown(function() {
        $('.outline').fadeOut(500);
        $('.qz_cpr_popup').removeClass('qz_cpr_popup_active');
    });

    // radio
    $('.qz_radio').click(function() {
        var k = $(this).parents('.qz_multiple').index('.qz_multiple');
        $('.qz_multiple:eq(' + k + ') .qz_ticked_radio').toggleClass('qz_ticked_radio');
        $(this).addClass('qz_ticked_radio');

    });
    //checkbox
    $('.qz_st6_item').click(function() {
        $(this).find('.qz_check_ic').toggleClass('qz_chkbox_checked');
    });
    // sequence
    if ($('.qz_sort_drag').length > 0) {
        $(".qz_sort_drag").draggable({
            drag: function(event, ui) {
                $('.qz_sort_drag').css('z-index', '100');
                $(this).css('z-index', '200');
            },
            stop: function() {
                if ($(this).attr('nodrop') != '') {
                    var top_drag = parseInt($(this).attr('inx'));
                    $(this).animate({
                        top: top_drag,
                        left: '0px'
                    }, 300);
                }
            }
        });
        $('.qz_sort_drop').droppable({
            accept: ".qz_sort_drag",
            tolerance: "intersect",
            greedy: true,
            drop: function(event, ui) {
                var inx_curr = parseInt($(this).attr('inx'));
                var inx_drag = $(ui.draggable).attr('inx');
                var draged = $(ui.draggable).attr('draged');
                var drag = $(ui.draggable).attr('drag');
                var drop = $(this).attr('drop');
                var drag_ui = inx_curr;
                var drag_move = inx_drag;
                var k = $(this).parent().index('.qz_sequence');
                var drag1 = $('.qz_sequence:eq(' + k + ') .qz_sort_drag[draged=' + drop + ']').not(ui.draggable).attr('drag');
                $('.qz_sequence:eq(' + k + ') .qz_sort_drop[droped=' + drag + ']').attr('droped', drag1);
                $('.qz_sequence:eq(' + k + ') .qz_sort_drag[draged=' + drop + ']').not(ui.draggable).animate({
                    top: drag_move,
                    left: "0px"
                }, 300).attr('inx', inx_drag).attr('draged', draged);
                $(this).attr('droped', drag);
                $(ui.draggable).animate({
                    top: drag_ui,
                    left: "0px"
                }, 300).attr('inx', inx_curr).attr('draged', drop);
                $(ui.draggable).removeAttr('nodrop');
            },
            over: function(event, ui) {
                $(ui.draggable).attr('nodrop', '1');
            }
        });

    }
    // click map	
    if ($('polygon').length > 0) {
        $('polygon').live("click", function(e) {
            e.stopPropagation();
            $('.mcfsl').removeClass('parent_cm');
            $(this).parents('.mcfsl').addClass('parent_cm');
            var n_svg = parseInt($(this).parents('.slmccplg').attr('n_svg'));
            var n = parseInt($(this).parents('.slmccplg').attr('n_click'));
            var offset = $(this).parents('.slmccplg').offset();
            var left = e.pageX - offset.left - 15;
            var top = e.pageY - offset.top - 15;
            var inx = $(this).index('.parent_cm polygon');
            console.log("index_poy=" + inx);
            $(this).attr('option', 1);
            if (n < n_svg) {
                $(this).parents('.slmccplg').after('<div class="position_click" inx="' + inx + '" style="left:' + left + 'px; top:' + top + 'px"><img src="/file/dungchung/quiz_common/images/smile1.png" style="width:30px" alt="bo chon" /></div>');
                n++;
            } else {
                $('.parent_cm .position_click:eq(0)').attr('inx', inx).animate({
                    left: left,
                    top: top
                }, 800);
            }
            $('.parent_cm .slmccplg').attr('n_click', n);

        });
        $('.position_click').live('click', function(e) {
            // xem co img nao svg=sgv this dang chiem giu ko
            var inx = $(this).attr('inx');

            if ($('.parent_cm .position_click[inx=' + inx + ']').length > 1) {
                $(this).remove();
            } else {
                $(this).remove();
                $('.parent_cm polygon:eq(' + inx + ')').removeAttr('option');
            }
            n = parseInt($('.parent_cm .slmccplg').attr('n_click'));
            n--;
            $('.parent_cm .slmccplg').attr('n_click', n);

        });
        $('.slmccplg').live("click", function(e) {
            $('.mcfsl').removeClass('parent_cm');
            var n_svg = parseInt($(this).attr('n_svg'));
            $(this).parents('.mcfsl').addClass('parent_cm');
            var n = parseInt($('.parent_cm .slmccplg').attr('n_click'));
            var offset = $('.parent_cm .slmccplg').offset();
            var left = e.pageX - offset.left - 15;
            var top = e.pageY - offset.top - 15;
            if (n < n_svg) {
                $(this).after('<div class="position_click" style="left:' + left + 'px; top:' + top + 'px"><img src="/file/dungchung/quiz_common/images/smile1.png" style="width:30px" alt="bo chon" /></div>');
                n++;
            } else {
                if ($('.parent_cm .position_click:eq(0)').attr('inx')) {
                    var inx1 = $('.parent_cm .position_click:eq(0)').attr('inx');
                    if ($('.parent_cm .position_click[inx=' + inx1 + ']').length > 1) {} else {
                        console.log("index=" + inx1);
                        $('.parent_cm polygon:eq(' + inx1 + ')').removeAttr('option');
                    }
                }
                $('.parent_cm .position_click:eq(0)').attr('inx', inx1).animate({
                    left: left,
                    top: top
                }, 800);
            }
            $('.parent_cm .slmccplg').attr('n_click', n);
        });
    }
    // bai giang	
    $('.qzbg_next').each(function(j) {
        var title = '';
        that = this;
        if (vip_qz == 0) {
            $('.qzbg_box:eq(' + (2 * j + 1) + ') .qz_content').each(function(i) {
                if (i < 2) {

                    txt = $(this).find('.qz_title_hidden').text();
                    if (txt == '') {
                        txt = "page " + i;
                    }

                    title += '<div class="qz_outmd_row qzbg_outline_item" inx="' + j + '"><div class="qz_outmc_text"><strong style="margin-right:20px;">' + (i + 1) + '.</strong>' + txt + '</div></div>';

                }
            });
            title += '<div class="qz_pop_layout qz_pop_layout1">' + msg_vip_bg + '<br /><br /><a title="Quyền lợi của thành vien VIP" href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank"><span class="qz_pop_bt">Đăng ký thành viên VIP</span></a><br /><br /></div></div>';
            $(that).parent().after('<div class="qz_pop qz_outline qzbg_outline"></div>');
            $('.qzbg_outline:eq(' + j + ')').html('<div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1" style="width:625px;">Danh sách slide</div><div class="qz_ouclose bgqz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview qzbg_outline_list">' + title + '</div></div></div></div></div></div></div>');
        } else {
            $('.qzbg_box:eq(' + (2 * j + 1) + ') .qz_content').each(function(i) {
                txt = $(this).find('.qz_title_hidden').text();
                if (txt == '') {
                    txt = "page " + i;
                }
                title += '<div class="qz_outmd_row qzbg_outline_item" inx="' + j + '"><div class="qz_outmc_text"><strong style="margin-right:20px;">' + (i + 1) + '.</strong>' + txt + '</div></div>';
            });
            $(that).parent().after('<div class="qz_pop qz_outline qzbg_outline"></div>');
            $('.qzbg_outline:eq(' + j + ')').html('<div class="qz_pop qz_outline qzbg_outline"><div class="qz_pop_layout qz_outline_box"><div class="qz_outline_title"><div class="qz_outline_title1" style="width:625px;">Danh sách slide</div><div class="qz_ouclose bgqz_ouclose"></div></div><div class="qz_outline_middle"><div class="scroll_outline"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview qzbg_outline_list">' + title + '</div></div></div></div></div></div></div>');
        }
    });
    $('.bgqz_ouclose').click(function() {
        $(this).parents('.qzbg_outline').fadeOut(200);
    });
    $('.qzbg_outline_list .qzbg_outline_item:eq(0)').addClass('qz_ol_active');
    $('.qzbg_outline_item').bind('click', function() {
        var ink = $(this).attr('inx');
        $('.qzbg_outline_list:eq(' + ink + ') .qzbg_outline_item').removeClass('qz_ol_active');
        $(this).addClass('qz_ol_active');
        $('.qzbg_outline:eq(' + ink + ')').fadeOut(200);
        var index = $(this).index('.qzbg_outline_list:eq(' + ink + ') .qzbg_outline_item');
        $('.bg_curr_' + ink).hide().removeClass('bg_curr_' + ink);
        $('.bg_current_' + ink + ' .qz_content:eq(' + index + ')').addClass('bg_curr_' + ink).show();
        toPos('.bg_current_' + ink);
        $('.jquery_jplayer_long').each(function(i) {
            addAudioLong(this, i, isIOS);
        });
        var type_ = $('.bg_curr_' + ink + ' .stt_page_type').attr('item_type');
        $('.bg_current_' + ink + ' .qz_type').text(type_);
        type = $('.bg_curr_' + ink + ' .stt_page_type').text();
        if ($('.bg_curr_' + ink).next().is('.qz_content')) {
            if (type != '') {
                $('.qzbg_submit:eq(' + ink + ')').show();
                $('.qzbg_next:eq(' + ink + ')').hide();
            } else {
                $('.qzbg_submit:eq(' + ink + ')').hide();
                $('.qzbg_next:eq(' + ink + ')').show();
            }
        } else {
            $('.qzbg_next:eq(' + ink + ')').hide();
        }
        if ($('.bg_curr_' + ink).prev().is('.qz_content')) {
            $('.qzbg_prev:eq(' + ink + ')').show();
        } else {
            $('.qzbg_prev:eq(' + ink + ')').hide();
        }
        title_bg = $('.bg_curr_' + ink + ' .qz_title_hidden').text();
        $('.bg_current_' + ink + ' .qz_title_name').text(title_bg);
        $('.bg_curr_' + ink).tinyscrollbar();
    });

});
