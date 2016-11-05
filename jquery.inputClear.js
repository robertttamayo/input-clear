(function($) {
    
    var count = 0;
    
    $.fn.inputClear = function() {
        
        count++;
        var _count = 0;
        
        this.filter("input[type=text]").each(function(){
            
            if (++_count > count) {
                count = _count;
            }
            
            var id = count;
            var target = $(this);
            var _trigger = document.createElement("label");
            var trigger = $(_trigger).html("&#10005;");
            var position = $(target).position();
            var width = $(target).outerWidth();
            
            $(target)
                .attr("data-cleartarget", id)
                .on("change keypress input paste", function(){
                    if ($(this).val() == ""){
                        $("[data-cleartrigger=" + $(this).data("cleartarget") +"]")
                            .hide();
                    }
                    else {
                        $("[data-cleartrigger=" + $(this).data("cleartarget") +"]")
                            .css("display", "inline");
                    }
            });
            
            $(trigger)
                .appendTo($(target).parent())
                .attr("data-cleartrigger", id)
                .attr("for", $(this).attr("name"))
                .css({
                    "margin": "0",
                    "position": "absolute",
                    "top": position.top + "px",
                    "left": (position.left + width) + "px",
                    "display": "none",
                    "height": $(target).outerHeight() + "px",
                    "padding-left": "4px",
                    "padding-right": "4px",
                    "cursor": "pointer",
                    "line-height": $(target).outerHeight() + "px",
                    "vertical-align": "middle",
                    "-webkit-transform": "translate(-100%, 0)",
                    "-ms-transform": "translate(-100%, 0)",
                    "transform": "translate(-100%, 0)"
                })
                .on("click", function(){
                    $("[data-cleartarget=" + $(this).data("cleartrigger") + "]")
                        .val("");
                    $(this).hide();
                });
        });
        
    }
    
}(jQuery));