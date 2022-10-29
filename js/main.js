$(document).ready(function () {

    $( "#section_1" ).hide();
    $( "#section_2" ).hide();
    $( "#section_3" ).hide();
    $( "#section_main" ).show();

    $( "#item_1" ).click(function() {
        $( "#section_main" ).hide();
        $( "#section_2" ).hide();
        $( "#section_3" ).hide();

        $( "#section_1" ).show();
    });

    $( "#item_2" ).click(function() {
        $( "#section_main" ).hide();
        $( "#section_1" ).hide();
        $( "#section_3" ).hide();

        $( "#section_2" ).show();
    });

    $( "#item_3" ).click(function() {
        $( "#section_main" ).hide();
        $( "#section_1" ).hide();
        $( "#section_2" ).hide();

        $( "#section_3" ).show();
    });

    $( "#item_main" ).click(function() {
        $( "#section_1" ).hide();
        $( "#section_2" ).hide();
        $( "#section_3" ).hide();

        $( "#section_main" ).show();
    });
});

