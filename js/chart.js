var SWC_Charts = new Array();
var ULC_Regions = new Array();
var ULC_Charts = new Array();
var All_Charts = "";
function ShowCharts() {
        All_Charts = "";
        for (var i = 0; i < SWC_Charts.length; i++) {
                All_Charts += "<img src='https://hezarfen.mgm.gov.tr/Genel/imgKrtPng.ashx?cevir=1&amp;syol=" + SWC_Charts[i] + "' width='100%' height='auto'><br/>";
        }
        for (var k = 0; k < ULC_Regions.length; k++) {
                for (var t = 0; t < ULC_Charts.length; t++) {
                        All_Charts += "<img src='https://hezarfen.mgm.gov.tr/Genel/imgKrtPng.ashx?cevir=1&amp;syol=" + ULC_Regions[k] + ULC_Charts[t] + "' width='100%' height='auto'><br/>";
                }
        }
        document.getElementById("Chart_Panel").innerHTML = All_Charts;
}
function ClearCharts() {
        SWC_Charts = [];
        ULC_Regions = [];
        ULC_Charts = [];
        document.getElementById("Chart_Panel").innerHTML = "";
        var checkboxes = document.getElementsByName('cb_id');
        for (var checkbox of checkboxes) {
                checkbox.checked = false;
        }

}
function SWC_Chart(CB_Value, CB_Situation) {

        if (CB_Situation == true) {
                SWC_Charts.push(CB_Value);
                SWC_Charts.sort();
        }
        else if (CB_Situation == false) {
                SWC_Charts = SWC_Charts.filter(word => word != CB_Value);
        }
}
function ULC_Reg(ULC_Value, ULC_Situation) {
        if (ULC_Situation == true) {
                ULC_Regions.push(ULC_Value);
        }
        else if (ULC_Situation == false) {
                ULC_Regions = ULC_Regions.filter(word => word != ULC_Value);
        }

}
function ULC_Chart(ULC_Value, ULC_Situation) {
        if (ULC_Situation == true) {
                ULC_Charts.push(ULC_Value);
        }
        else if (ULC_Situation == false) {
                ULC_Charts = ULC_Charts.filter(word => word != ULC_Value);
        }

}

function Print_Chart(prt) {
        var Charts_Printed = document.getElementById(prt).innerHTML;
        var Print_Page = document.body.innerHTML;
        document.body.innerHTML = "<html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Weather Charts Print</title><style type='text/css' media='print'> @page {size: landscape; margin:0; }</style></head><body><div id='prnt'>" + Charts_Printed + "</div></body></html>";
        window.print();
        document.body.innerHTML = Print_Page;
} 