
    /* =============================================================

   ============================================================= */










/* ********************************************************************************************
   * Global Variables
   *
   *
   * 
   * 
   *
   * ******************************************************************************************** */

var startString = "";
var workingString = "";
var finishString = "";
var finishCursorStart = 0;
var finishCursorEnd = 0;
var currentCursor = 0;






/* ********************************************************************************************
   * insertAtCursor (object)
   *
   *
   * 
   * 
   * Much thanks to ???? (http://www.????) for getting me started on this function.
   *
   * ******************************************************************************************** */

function convertStr(control, event) {

    var key;
    if (window.event) {
    // for IE
        key = event.keyCode; 
    } else if (event.which) {
    // for Mozilla
        key = event.which; 
    }
    
    if ( (key != 37) && (key != 38) && (key != 39) && (key != 40)  ) {
        // --------------- get cursor info and starting value
        startString = control.value;
        while (startString.indexOf ("(#$-undo-not-available-$#)", "") > -1) {
            startString = startString.replace("(#$-undo-not-available-$#)", "");
        }
        finishString = "";
        var scrollTop = control.scrollTop;  
    
        //IE support
        if (document.selection) {
            sel = document.selection.createRange();
            textSelected = sel.text;
            key = "(#$-undo-not-available-$#)";
            lenSelected = sel.text.length;
            sel.text = key;
            finishCursorStart = control.value.indexOf(key);
            finishCursorEnd = finishCursorStart + lenSelected;
        //MOZILLA/NETSCAPE support
        } else if (control.selectionStart || control.selectionStart == '0') {
            finishCursorStart = control.selectionStart;
            finishCursorEnd = control.selectionEnd;
        }
    
        // --------------- break apart the greek characters in the starting value
        breakApartGreekCharacters(control);
        // --------------- combine the greek characters in the starting value
        combineGreekCharacters(control);

        // --------------- insert finishing value 
        control.value = finishString;
        //IE support
        if (document.selection) {
            stringBeforeCursor = (finishString.substring(0, finishCursorStart));
            numberOfHardReturnsBefore = 0     
            while (stringBeforeCursor.indexOf("\r\n") > -1) {
                numberOfHardReturnsBefore = numberOfHardReturnsBefore + 1;
                stringBeforeCursor = stringBeforeCursor.replace("\r\n", "#");
            }
            sel.moveStart("character", finishCursorStart - numberOfHardReturnsBefore);

            stringAfterCursor = (finishString.substring(finishCursorEnd, finishString.length));
            numberOfHardReturnsAfter = 0;
            while (stringAfterCursor.indexOf("\r\n") > -1) {
                numberOfHardReturnsAfter = numberOfHardReturnsAfter + 1;
                stringAfterCursor = stringAfterCursor.replace("\r\n", "#");
            }
            //if (stringAfterCursor.indexOf("#") == 0 && finishCursorStart != finishCursorEnd) {numberOfHardReturnsAfter = numberOfHardReturnsAfter + 1;};
            sel.moveEnd("character", ( finishCursorEnd - (finishString.length) + numberOfHardReturnsAfter) );
    
            sel.select();
        
        //MOZILLA/NETSCAPE support
        } else if (control.selectionStart || control.selectionStart == '0') {
            control.selectionStart = finishCursorStart;
            control.selectionEnd = finishCursorEnd;
            control.scrollTop = scrollTop;
        }
    }
return;
}








/* ********************************************************************************************
   * convertCharToggle (object, boolean, event)
   *
   * 
   * 
   * 
   * 
   * ******************************************************************************************** */
   
function convertCharToggle(control, toggle, event) {

    if (toggle == true) {
        var key;
        if (window.event) {
        // for IE
        key = event.keyCode; 
        } else if (event.which) {
        // for Mozilla
            key = event.which; 
        }
        typeLetter = true;

        if ( event.ctrlKey || event.metaKey ) {
        	return;
        } else {
            if ( key == 38 ) { insertAtCursor(control, '`'); typeLetter = false; } // & -> \
            if ( key == 33 ) { insertAtCursor(control, 'Íº'); typeLetter = false; } // ! -> |
            if ( key == 40 ) { insertAtCursor(control, 'á¿¾'); typeLetter = false; }
            if ( key == 41 ) { insertAtCursor(control, 'á¾¿'); typeLetter = false; }
            if ( key == 43 ) { insertAtCursor(control, 'Â¨'); typeLetter = false; }
            if ( key == 47 ) { insertAtCursor(control, 'Â´'); typeLetter = false; }
            if ( key == 58 ) { insertAtCursor(control, 'Â·'); typeLetter = false; }            
            if ( key == 59 ) { insertAtCursor(control, 'Â·'); typeLetter = false; }            
            if ( key == 61 ) { insertAtCursor(control, 'á¿€'); typeLetter = false; }    
            if ( key == 63 ) { insertAtCursor(control, ';'); typeLetter = false; }
            if ( key == 64 ) { insertAtCursor(control, 'Ì£'); typeLetter = false; }                    
            if ( key == 65 ) { insertAtCursor(control, 'Î‘'); typeLetter = false; }
            if ( key == 66 ) { insertAtCursor(control, 'Î’'); typeLetter = false; }    
            if ( key == 67 ) { insertAtCursor(control, 'Îž'); typeLetter = false; }        
            if ( key == 68 ) { insertAtCursor(control, 'Î”'); typeLetter = false; }            
            if ( key == 69 ) { insertAtCursor(control, 'Î•'); typeLetter = false; }
            if ( key == 70 ) { insertAtCursor(control, 'Î¦'); typeLetter = false; }            
            if ( key == 71 ) { insertAtCursor(control, 'Î“'); typeLetter = false; }                
            if ( key == 72 ) { insertAtCursor(control, 'Î—'); typeLetter = false; }                    
            if ( key == 73 ) { insertAtCursor(control, 'Î™'); typeLetter = false; }        
            if ( key == 74 ) { insertAtCursor(control, 'Î£'); typeLetter = false; }            
            if ( key == 75 ) { insertAtCursor(control, 'Îš'); typeLetter = false; }                
            if ( key == 76 ) { insertAtCursor(control, 'Î›'); typeLetter = false; }                    
            if ( key == 77 ) { insertAtCursor(control, 'Îœ'); typeLetter = false; }                        
            if ( key == 78 ) { insertAtCursor(control, 'Î'); typeLetter = false; }                            
            if ( key == 79 ) { insertAtCursor(control, 'ÎŸ'); typeLetter = false; }    
            if ( key == 80 ) { insertAtCursor(control, 'Î '); typeLetter = false; }        
            if ( key == 81 ) { insertAtCursor(control, 'Î˜'); typeLetter = false; }            
            if ( key == 82 ) { insertAtCursor(control, 'Î¡'); typeLetter = false; }    
            if ( key == 83 ) { insertAtCursor(control, 'Î£'); typeLetter = false; }        
            if ( key == 84 ) { insertAtCursor(control, 'Î¤'); typeLetter = false; }            
            if ( key == 85 ) { insertAtCursor(control, 'Î¥'); typeLetter = false; }
            if ( key == 86 ) { insertAtCursor(control, 'Ïœ'); typeLetter = false; }    
            if ( key == 87 ) { insertAtCursor(control, 'Î©'); typeLetter = false; }        
            if ( key == 88 ) { insertAtCursor(control, 'Î§'); typeLetter = false; }            
            if ( key == 89 ) { insertAtCursor(control, 'Î¨'); typeLetter = false; }    
            if ( key == 90 ) { insertAtCursor(control, 'Î–'); typeLetter = false; }        
            if ( key == 92 ) { insertAtCursor(control, '`'); typeLetter = false; }
            if ( key == 97 ) { insertAtCursor(control, 'Î±'); typeLetter = false; }
            if ( key == 98 ) { insertAtCursor(control, 'Î²'); typeLetter = false; }    
            if ( key == 99 ) { insertAtCursor(control, 'Î¾'); typeLetter = false; }
            if ( key == 100 ) { insertAtCursor(control, 'Î´'); typeLetter = false; }            
            if ( key == 101 ) { insertAtCursor(control, 'Îµ'); typeLetter = false; }        
            if ( key == 102 ) { insertAtCursor(control, 'Ï†'); typeLetter = false; }            
            if ( key == 103 ) { insertAtCursor(control, 'Î³'); typeLetter = false; }                
            if ( key == 104 ) { insertAtCursor(control, 'Î·'); typeLetter = false; }                    
            if ( key == 105 ) { insertAtCursor(control, 'Î¹'); typeLetter = false; }            
            if ( key == 106 ) { insertAtCursor(control, 'Ï‚'); typeLetter = false; }
            if ( key == 107 ) { insertAtCursor(control, 'Îº'); typeLetter = false; }    
            if ( key == 108 ) { insertAtCursor(control, 'Î»'); typeLetter = false; }        
            if ( key == 109 ) { insertAtCursor(control, 'Î¼'); typeLetter = false; }            
            if ( key == 110 ) { insertAtCursor(control, 'Î½'); typeLetter = false; }                
            if ( key == 111 ) { insertAtCursor(control, 'Î¿'); typeLetter = false; }            
            if ( key == 112 ) { insertAtCursor(control, 'Ï€'); typeLetter = false; }                
            if ( key == 113 ) { insertAtCursor(control, 'Î¸'); typeLetter = false; }                        
            if ( key == 114 ) { insertAtCursor(control, 'Ï'); typeLetter = false; }                    
            if ( key == 115 ) { insertAtCursor(control, 'Ïƒ'); typeLetter = false; }    
            if ( key == 116 ) { insertAtCursor(control, 'Ï„'); typeLetter = false; }        
            if ( key == 117 ) { insertAtCursor(control, 'Ï…'); typeLetter = false;}
            if ( key == 118 ) { insertAtCursor(control, 'Ï'); typeLetter = false;}    
            if ( key == 119 ) { insertAtCursor(control, 'Ï‰'); typeLetter = false;}        
            if ( key == 120 ) { insertAtCursor(control, 'Ï‡'); typeLetter = false; }
            if ( key == 121 ) { insertAtCursor(control, 'Ïˆ'); typeLetter = false; }    
            if ( key == 122 ) { insertAtCursor(control, 'Î¶'); typeLetter = false; }        
            if ( key == 124 ) { insertAtCursor(control, 'Íº'); typeLetter = false; }
            // add ! for iota
            // add & for \
            return typeLetter;
        }
    }
}






/* ********************************************************************************************
   * insertAtCursor (object)
   * ******************************************************************************************** */
   
function insertAtCursor(myField, myValue) {
  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }

  //MOZILLA/NETSCAPE support
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    var cursorPos = endPos;
    var scrollTop = myField.scrollTop;    

    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
    cursorPos = startPos + myValue.length;

    myField.focus();
    myField.selectionStart = cursorPos;
    myField.selectionEnd = cursorPos;
    myField.scrollTop = scrollTop;
    
  } else {
    myField.value += myValue;
  }
}





/* ********************************************************************************************
   * combineGreekCharacters (object)
   *
   *
   * 
   * 
   * 
   * ******************************************************************************************** */
   
function breakApartGreekCharacters(control) {

    currentCursor = 0;
    startString = startString.replace(/`/,"`");
    while (startString != "") {

        workingString = "";
        removeOne();
        
        if ( workingString == "Ï‚" ) { workingString = "Ïƒ"; }
        if ( workingString == "Î¬" ) { workingString = "Î±Â´"; }
        if ( workingString == "á¼" ) { workingString = "Î±á¿¾"; }
        if ( workingString == "á¼€" ) { workingString = "Î±á¾¿"; }
        if ( workingString == "á¾¶" ) { workingString = "Î±á¿€"; }
        if ( workingString == "á¾³" ) { workingString = "Î±Íº"; }
        if ( workingString == "á¼„" ) { workingString = "Î±á¾¿Â´"; }
        if ( workingString == "á¾´" ) { workingString = "Î±Â´Íº"; }
        if ( workingString == "á¾€" ) { workingString = "Î±á¾¿Íº"; }
        if ( workingString == "á¾" ) { workingString = "Î±á¿¾Íº"; }
        if ( workingString == "á¾·" ) { workingString = "Î±á¿€Íº"; }
        if ( workingString == "á¾„" ) { workingString = "Î±á¾¿Â´Íº"; }
        if ( workingString == "á¾‚" ) { workingString = "Î±á¾¿`Íº"; }
        if ( workingString == "á¼‚" ) { workingString = "Î±á¾¿`"; }
        if ( workingString == "á¾ƒ" ) { workingString = "Î±á¿¾`Íº"; }
        if ( workingString == "á¼ƒ" ) { workingString = "Î±á¿¾`"; }
        if ( workingString == "á¾²" ) { workingString = "Î±`Íº"; }
        if ( workingString == "á½°" ) { workingString = "Î±`"; }
        if ( workingString == "á¾…" ) { workingString = "Î±á¿¾Â´Íº"; }
        if ( workingString == "á¼…" ) { workingString = "Î±á¿¾Â´"; }
        if ( workingString == "á¼‡" ) { workingString = "Î±á¿¾á¿€"; }
        if ( workingString == "á¾‡" ) { workingString = "Î±á¿¾á¿€Íº"; }
        if ( workingString == "á¾†" ) { workingString = "Î±á¾¿á¿€Íº"; }
        if ( workingString == "á¼†" ) { workingString = "Î±á¾¿á¿€"; }
        if ( workingString == "á¾¼" ) { workingString = "Î‘Íº"; }
        if ( workingString == "á¼‰" ) { workingString = "Î‘á¿¾"; }
        if ( workingString == "á¾‰" ) { workingString = "Î‘á¿¾Íº"; }
        if ( workingString == "á¼ˆ" ) { workingString = "Î‘á¾¿"; }
        if ( workingString == "á¾ˆ" ) { workingString = "Î‘á¾¿Íº"; }
        if ( workingString == "á¾" ) { workingString = "Î‘á¿¾á¿€Íº"; }
        if ( workingString == "á¼" ) { workingString = "Î‘á¿¾á¿€"; }
        if ( workingString == "á¾Ž" ) { workingString = "Î‘á¾¿á¿€Íº"; }
        if ( workingString == "á¼Ž" ) { workingString = "Î‘á¾¿á¿€"; }
        if ( workingString == "á¾º" ) { workingString = "Î‘`"; }
        if ( workingString == "á¼‹" ) { workingString = "Î‘á¿¾`"; }
        if ( workingString == "á¾‹" ) { workingString = "Î‘á¿¾`Íº"; }
        if ( workingString == "á¼Š" ) { workingString = "Î‘á¾¿`"; }
        if ( workingString == "á¾Š" ) { workingString = "Î‘á¾¿`Íº"; }
        if ( workingString == "Î†" ) { workingString = "Î‘Â´"; }
        if ( workingString == "á¼" ) { workingString = "Î‘á¿¾Â´"; }
        if ( workingString == "á¾" ) { workingString = "Î‘á¿¾Â´Íº"; }
        if ( workingString == "á¼Œ" ) { workingString = "Î‘á¾¿Â´"; }
        if ( workingString == "á¾Œ" ) { workingString = "Î‘á¾¿Â´Íº"; }   
        
        if ( workingString == "Î®" ) { workingString = "Î·Â´"; }
        if ( workingString == "á¼¡" ) { workingString = "Î·á¿¾"; }
        if ( workingString == "á¼ " ) { workingString = "Î·á¾¿"; }
        if ( workingString == "á¿†" ) { workingString = "Î·á¿€"; }
        if ( workingString == "á¿ƒ" ) { workingString = "Î·Íº"; }
        if ( workingString == "á¼¤" ) { workingString = "Î·á¾¿Â´"; }
        if ( workingString == "á¿„" ) { workingString = "Î·Â´Íº"; }
        if ( workingString == "á¾" ) { workingString = "Î·á¾¿Íº"; }
        if ( workingString == "á¾‘" ) { workingString = "Î·á¿¾Íº"; }
        if ( workingString == "á¿‡" ) { workingString = "Î·á¿€Íº"; }
        if ( workingString == "á¾”" ) { workingString = "Î·á¾¿Â´Íº"; }
        if ( workingString == "á¾’" ) { workingString = "Î·á¾¿`Íº"; }
        if ( workingString == "á¼¢" ) { workingString = "Î·á¾¿`"; }
        if ( workingString == "á¾“" ) { workingString = "Î·á¿¾`Íº"; }
        if ( workingString == "á¼£" ) { workingString = "Î·á¿¾`"; }
        if ( workingString == "á¿‚" ) { workingString = "Î·`Íº"; }
        if ( workingString == "á½´" ) { workingString = "Î·`"; }
        if ( workingString == "á¾•" ) { workingString = "Î·á¿¾Â´Íº"; }
        if ( workingString == "á¼¥" ) { workingString = "Î·á¿¾Â´"; }
        if ( workingString == "á¼§" ) { workingString = "Î·á¿¾á¿€"; }
        if ( workingString == "á¾—" ) { workingString = "Î·á¿¾á¿€Íº"; }
        if ( workingString == "á¾–" ) { workingString = "Î·á¾¿á¿€Íº"; }
        if ( workingString == "á¼¦" ) { workingString = "Î·á¾¿á¿€"; }
        if ( workingString == "á¿Œ" ) { workingString = "Î—Íº"; }
        if ( workingString == "á¼©" ) { workingString = "Î—á¿¾"; }
        if ( workingString == "á¾™" ) { workingString = "Î—á¿¾Íº"; }
        if ( workingString == "á¼¨" ) { workingString = "Î—á¾¿"; }
        if ( workingString == "á¾˜" ) { workingString = "Î—á¾¿Íº"; }
        if ( workingString == "á¾Ÿ" ) { workingString = "Î—á¿¾á¿€Íº"; }
        if ( workingString == "á¼¯" ) { workingString = "Î—á¿¾á¿€"; }
        if ( workingString == "á¾ž" ) { workingString = "Î—á¾¿á¿€Íº"; }
        if ( workingString == "á¼®" ) { workingString = "Î—á¾¿á¿€"; }
        if ( workingString == "á¿Š" ) { workingString = "Î—`"; }
        if ( workingString == "á¼«" ) { workingString = "Î—á¿¾`"; }
        if ( workingString == "á¾›" ) { workingString = "Î—á¿¾`Íº"; }
        if ( workingString == "á¼ª" ) { workingString = "Î—á¾¿`"; }
        if ( workingString == "á¾š" ) { workingString = "Î—á¾¿`Íº"; }
        if ( workingString == "Î‰" ) { workingString = "Î—Â´"; }
        if ( workingString == "á¼­" ) { workingString = "Î—á¿¾Â´"; }
        if ( workingString == "á¾" ) { workingString = "Î—á¿¾Â´Íº"; }
        if ( workingString == "á¼¬" ) { workingString = "Î—á¾¿Â´"; }
        if ( workingString == "á¾œ" ) { workingString = "Î—á¾¿Â´Íº"; } 
        
        if ( workingString == "ÏŽ" ) { workingString = "Ï‰Â´"; }
        if ( workingString == "á½¡" ) { workingString = "Ï‰á¿¾"; }
        if ( workingString == "á½ " ) { workingString = "Ï‰á¾¿"; }
        if ( workingString == "á¿¶" ) { workingString = "Ï‰á¿€"; }
        if ( workingString == "á¿³" ) { workingString = "Ï‰Íº"; }
        if ( workingString == "á½¤" ) { workingString = "Ï‰á¾¿Â´"; }
        if ( workingString == "á¿´" ) { workingString = "Ï‰Â´Íº"; }
        if ( workingString == "á¾ " ) { workingString = "Ï‰á¾¿Íº"; }
        if ( workingString == "á¾¡" ) { workingString = "Ï‰á¿¾Íº"; }
        if ( workingString == "á¿·" ) { workingString = "Ï‰á¿€Íº"; }
        if ( workingString == "á¾¤" ) { workingString = "Ï‰á¾¿Â´Íº"; }
        if ( workingString == "á¾¢" ) { workingString = "Ï‰á¾¿`Íº"; }
        if ( workingString == "á½¢" ) { workingString = "Ï‰á¾¿`"; }
        if ( workingString == "á¾£" ) { workingString = "Ï‰á¿¾`Íº"; }
        if ( workingString == "á½£" ) { workingString = "Ï‰á¿¾`"; }
        if ( workingString == "á¿²" ) { workingString = "Ï‰`Íº"; }
        if ( workingString == "á½¼" ) { workingString = "Ï‰`"; }
        if ( workingString == "á¾¥" ) { workingString = "Ï‰á¿¾Â´Íº"; }
        if ( workingString == "á½¥" ) { workingString = "Ï‰á¿¾Â´"; }
        if ( workingString == "á½§" ) { workingString = "Ï‰á¿¾á¿€"; }
        if ( workingString == "á¾§" ) { workingString = "Ï‰á¿¾á¿€Íº"; }
        if ( workingString == "á¾¦" ) { workingString = "Ï‰á¾¿á¿€Íº"; }
        if ( workingString == "á½¦" ) { workingString = "Ï‰á¾¿á¿€"; }
        if ( workingString == "á¿¼" ) { workingString = "Î©Íº"; }
        if ( workingString == "á½©" ) { workingString = "Î©á¿¾"; }
        if ( workingString == "á¾©" ) { workingString = "Î©á¿¾Íº"; }
        if ( workingString == "á½¨" ) { workingString = "Î©á¾¿"; }
        if ( workingString == "á¾¨" ) { workingString = "Î©á¾¿Íº"; }
        if ( workingString == "á¾¯" ) { workingString = "Î©á¿¾á¿€Íº"; }
        if ( workingString == "á½¯" ) { workingString = "Î©á¿¾á¿€"; }
        if ( workingString == "á¾®" ) { workingString = "Î©á¾¿á¿€Íº"; }
        if ( workingString == "á½®" ) { workingString = "Î©á¾¿á¿€"; }
        if ( workingString == "á¿º" ) { workingString = "Î©`"; }
        if ( workingString == "á½«" ) { workingString = "Î©á¿¾`"; }
        if ( workingString == "á¾«" ) { workingString = "Î©á¿¾`Íº"; }
        if ( workingString == "á½ª" ) { workingString = "Î©á¾¿`"; }
        if ( workingString == "á¾ª" ) { workingString = "Î©á¾¿`Íº"; }
        if ( workingString == "Î" ) { workingString = "Î©Â´"; }
        if ( workingString == "á½­" ) { workingString = "Î©á¿¾Â´"; }
        if ( workingString == "á¾­" ) { workingString = "Î©á¿¾Â´Íº"; }
        if ( workingString == "á½¬" ) { workingString = "Î©á¾¿Â´"; }
        if ( workingString == "á¾¬" ) { workingString = "Î©á¾¿Â´Íº"; }          

        if ( workingString == "Î­" ) { workingString = "ÎµÂ´"; }
        if ( workingString == "á½²" ) { workingString = "Îµ`"; }        
        if ( workingString == "á¼" ) { workingString = "Îµá¾¿"; }
        if ( workingString == "á¼‘" ) { workingString = "Îµá¿¾"; }        
        if ( workingString == "á¼”" ) { workingString = "Îµá¾¿Â´"; }        
        if ( workingString == "á¼“" ) { workingString = "Îµá¿¾`"; }
        if ( workingString == "Îˆ" ) { workingString = "Î•Â´"; }
        if ( workingString == "á¿ˆ" ) { workingString = "Î•`"; }        
        if ( workingString == "á¼˜" ) { workingString = "Î•á¾¿"; }
        if ( workingString == "á¼™" ) { workingString = "Î•á¿¾"; }        
        if ( workingString == "á¼œ" ) { workingString = "Î•á¾¿Â´"; }        
        if ( workingString == "á¼" ) { workingString = "Î•á¿¾Â´"; }  
        
        if ( workingString == "Î¯" ) { workingString = "Î¹Â´"; }
        if ( workingString == "á¼°" ) { workingString = "Î¹á¾¿"; }
        if ( workingString == "á¿–" ) { workingString = "Î¹á¿€"; }
        if ( workingString == "á¼±" ) { workingString = "Î¹á¿¾"; }
        if ( workingString == "á¼´" ) { workingString = "Î¹á¾¿Â´"; }
        if ( workingString == "ÏŠ" ) { workingString = "Î¹Â¨"; }
        if ( workingString == "Î" ) { workingString = "Î¹Â´Â¨"; }
        if ( workingString == "á¼²" ) { workingString = "Î¹á¾¿`"; }
        if ( workingString == "á¼³" ) { workingString = "Î¹á¿¾`"; }
        if ( workingString == "á¿’" ) { workingString = "Î¹`Â¨"; }
        if ( workingString == "á½¶" ) { workingString = "Î¹`"; }
        if ( workingString == "á¼µ" ) { workingString = "Î¹á¿¾Â´"; }
        if ( workingString == "á¿—" ) { workingString = "Î¹á¿€Â¨"; }
        if ( workingString == "á¼·" ) { workingString = "Î¹á¿¾á¿€"; }
        if ( workingString == "á¼¶" ) { workingString = "Î¹á¾¿á¿€"; }
        if ( workingString == "Îª" ) { workingString = "Î™Â¨"; }
        if ( workingString == "á¼¹" ) { workingString = "Î™á¿¾"; }
        if ( workingString == "á¼¿" ) { workingString = "Î™á¿¾á¿€"; }
        if ( workingString == "á¿š" ) { workingString = "Î™`"; }
        if ( workingString == "á¼»" ) { workingString = "Î™á¿¾`"; }
        if ( workingString == "ÎŠ" ) { workingString = "Î™Â´"; }
        if ( workingString == "á¼½" ) { workingString = "Î™á¿¾Â´"; }
        if ( workingString == "á¼¸" ) { workingString = "Î™á¾¿"; }
        if ( workingString == "á¼¾" ) { workingString = "Î™á¾¿á¿€"; }
        if ( workingString == "á¼º" ) { workingString = "Î™á¾¿`"; }
        if ( workingString == "á¼¼" ) { workingString = "Î™á¾¿Â´"; }        

        if ( workingString == "ÏŒ" ) { workingString = "Î¿Â´"; }
        if ( workingString == "á½¸" ) { workingString = "Î¿`"; }        
        if ( workingString == "á½€" ) { workingString = "Î¿á¾¿"; }
        if ( workingString == "á½" ) { workingString = "Î¿á¿¾"; }        
        if ( workingString == "á½ƒ" ) { workingString = "Î¿á¿¾`"; }        
        if ( workingString == "á½…" ) { workingString = "Î¿á¿¾Â´"; }
        if ( workingString == "ÎŒ" ) { workingString = "ÎŸÂ´"; }
        if ( workingString == "á¿¸" ) { workingString = "ÎŸ`"; }        
        if ( workingString == "á½ˆ" ) { workingString = "ÎŸá¾¿"; }
        if ( workingString == "á½‰" ) { workingString = "ÎŸá¿¾"; }        
        if ( workingString == "á½Œ" ) { workingString = "ÎŸá¾¿Â´"; }        
        if ( workingString == "á½" ) { workingString = "ÎŸá¿¾Â´"; }

        if ( workingString == "Ï" ) { workingString = "Ï…Â´"; }
        if ( workingString == "á½" ) { workingString = "Ï…á¾¿"; }
        if ( workingString == "á¿¦" ) { workingString = "Ï…á¿€"; }
        if ( workingString == "á½‘" ) { workingString = "Ï…á¿¾"; }
        if ( workingString == "á½”" ) { workingString = "Ï…á¾¿Â´"; }
        if ( workingString == "Ï‹" ) { workingString = "Ï…Â¨"; }
        if ( workingString == "Î°" ) { workingString = "Ï…Â´Â¨"; }
        if ( workingString == "á½’" ) { workingString = "Ï…á¾¿`"; }
        if ( workingString == "á½“" ) { workingString = "Ï…á¿¾`"; }
        if ( workingString == "á¿¢" ) { workingString = "Ï…`Â¨"; }
        if ( workingString == "á½º" ) { workingString = "Ï…`"; }
        if ( workingString == "á½•" ) { workingString = "Ï…á¿¾Â´"; }
        if ( workingString == "á¿§" ) { workingString = "Ï…á¿€Â¨"; }
        if ( workingString == "á½—" ) { workingString = "Ï…á¿¾á¿€"; }
        if ( workingString == "á½–" ) { workingString = "Ï…á¾¿á¿€"; }
        if ( workingString == "Î«" ) { workingString = "Î¥Â¨"; }
        if ( workingString == "á½™" ) { workingString = "Î¥á¿¾"; }
        if ( workingString == "á½Ÿ" ) { workingString = "Î¥á¿¾á¿€"; }
        if ( workingString == "á¿ª" ) { workingString = "Î¥`"; }
        if ( workingString == "á½›" ) { workingString = "Î¥á¿¾`"; }
        if ( workingString == "ÎŽ" ) { workingString = "Î¥Â´"; }
        if ( workingString == "á½" ) { workingString = "Î¥á¿¾Â´"; }

        if ( workingString == "á¿¬" ) { workingString = "Î¡á¿¾"; }
        if ( workingString == "á¿¥" ) { workingString = "Ïá¿¾"; }        

        if ( currentCursor <= finishCursorStart ) { finishCursorStart = finishCursorStart + (workingString.length - 1); }
        if ( currentCursor <= finishCursorEnd ) { finishCursorEnd = finishCursorEnd + (workingString.length - 1); }
        currentCursor = currentCursor + (workingString.length - 1);

        finishString = finishString + workingString;    
    }
    return;
}






/* ********************************************************************************************
   * combineGreekCharacters (object)
   *
   *
   * 
   * 
   * 
   * ******************************************************************************************** */

function combineGreekCharacters(control) {

    var COMBINABLE = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Î¡ÏÎ¥Ï…";
    var VOWELS = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Î¥Ï…";
    var CAPITALS = "Î‘Î—Î©Î•Î™ÎŸÎ¡Î¥";
    var LONG_VOWELS = "Î‘Î±Î—Î·Î©Ï‰Î™Î¹Î¥Ï…";
    var ROUGH_BREATHING = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Î¡ÏÎ¥Ï…";
    var SMOOTH_BREATHING = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Ï…";
    var IOTA = "Î‘Î±Î—Î·Î©Ï‰";
    var DIERESIS = "Î¥Ï…Î™Î¹";
    var TERMINAL = "\n\r,;. :Â·;"
    
    startString = finishString;
    finishString = "";
    currentCursor = 0;
    var keepGoing = true;

    while (startString != "") {

        keepGoing = true;
        workingString = "";
        removeOne();

        if (startString != "") {        
        // there's at least one more character in the string
        
            if (COMBINABLE.indexOf(workingString) > -1 ) {
            // the current character could be combined with other characters

                while ( (keepGoing == true) && (startString != "") ) {

                    if ( (startString.charAt(0) == "Â´") || (startString.charAt(0) == "`") ) {
                    // the next character is / or \

                        if ( (VOWELS.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1) ) {
                        // the current string starts with a vowel and it does not have any of the three accents (/, \, or =)

                            if ( (CAPITALS.indexOf(workingString.charAt(0)) > -1) ) {
                            // the current string starts with a capital letter

                                if ( (DIERESIS.indexOf(workingString.charAt(0)) > -1) ) {
                                // the current string starts with a letter that receives a dieresis
	  
	      if (workingString.indexOf('Â¨') > -1) {
                                    // the current string contains a dieresis
	          keepGoing = false;
	      } else {
                                    // the current string does not contain a dieresis
	          removeOne();
	      }
	  } else {
                                    if (IOTA.indexOf(workingString.charAt(0)) > -1) {
                                    // the current string starts with a letter that receives an iota
	      
	          if (  (workingString.indexOf('Íº') > -1) && (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1)  ) {
	          // the current string contains an iota and no breathing
	              keepGoing = false;
	          } else {
	              removeOne();     
	          }
	      } else {
                                    // the current string starts with a letter that does not receive a dieresis or an iota		      
                                        removeOne();	      
	      }
	  }
                            } else {
                            // the current string does NOT start with a capital letter
                                removeOne();
                            }
                        } else {
                            keepGoing = false;
                        }
                    } else {
                        if ( (startString.charAt(0) == "á¿€") ) {
                        // the next character is =

                            if ( (LONG_VOWELS.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1) ) {
                            // the current string starts with a long vowel and it does not have any of the three accents (/, \, or =)
                            
                                if ( (CAPITALS.indexOf(workingString.charAt(0)) > -1) ) {
                                // the current string starts with a capital letter
	  
                                     if (  (DIERESIS.indexOf(workingString.charAt(0)) > -1)  ) {
                                     // the current string starts with a letter that receives a dieresis

	           if (  (  (workingString.indexOf('á¾¿') > -1)  || (workingString.indexOf('á¿¾') > -1) || (startString.charAt(1) == 'á¾¿') || (startString.charAt(1) == 'á¿¾') )  && (workingString.indexOf('Â¨') == -1)  ) {
                                         // the current string contains a breathing mark (already or coming up next) and no dieresis

	               if (  (SMOOTH_BREATHING.indexOf(workingString.charAt(0)) == -1) ) {
	               // the current string starts with a letter that does not receive a smooth breathing		               
	               
	                   if (  ( (workingString.indexOf('á¿¾') > -1) || (startString.charAt(1) == 'á¿¾') )  ) {
    	                       removeOne();
	                   } else {
	                       keepGoing = false;	                                  
	                   }
	               } else {
	                   removeOne();		               
	               }
	           } else {
	               keepGoing = false;		           
	           }       
	       } else {
                                        if (  (IOTA.indexOf(workingString.charAt(0)) > -1)  ) {

                                            if (      (((workingString.indexOf('á¾¿') > -1)  || (workingString.indexOf('á¿¾') > -1) || (startString.charAt(1) == 'á¾¿') || (startString.charAt(1) == 'á¿¾')))     || ((( (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1) && (startString.charAt(1) == 'Íº') && (workingString.indexOf('Íº') == -1) && (  (startString.charAt(2) == 'á¾¿') || (startString.charAt(2) == 'á¿¾') ))))    ) {
                                            // the current string contains a breathing mark (already or coming up next) 
                                                removeOne();  	              
	              } else {
	                  keepGoing = false;		              
	              }
	          } else {
                                            keepGoing = false;
	          }
	       }
	  } else {
                                    removeOne();  
	  }
                            } else {
                                keepGoing = false;	                            
                            }
                        } else {
                        // the next character is not an accent mark
                        
                            if ( (startString.charAt(0) == "á¾¿") || (startString.charAt(0) == "á¿¾") ) {
                            // the next character is ) or (
                            
                                if (  (ROUGH_BREATHING.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1) && (workingString.indexOf('Â¨') == -1)  ) {
                                // the current string starts with a letter that receives a rough breathing (vowels and rho) and has no breathing mark and has no dieresis
                                    if ( startString.charAt(0) == "á¿¾" ) {
                                    // the next character is (
                                        removeOne();
	      } else {
                                    // the next character is )
                                        if (  (SMOOTH_BREATHING.indexOf(workingString.charAt(0)) > -1)   ) {
                                        // the current string starts with a letter that receives a smooth breathing (same except for capital upsilon and capital rho)
                                            removeOne();                                        
	          } else {
                                            keepGoing = false;
	          }
                                    }
                                } else { 
                                    keepGoing = false;                    
                                }
                            } else {
                            // the next character is not an accent or a breathing mark

                                if ( (startString.charAt(0) == "Íº") || (startString.charAt(0) == "Â¨") ) {
                                // the next character is | or +
	  
                                    if ( startString.charAt(0) == "Íº" ) {
                                    // the next character is |
	      
	          if ( (IOTA.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Íº') == -1)  ) {
	          // the current string starts with a letter that receives an iota and has no iota
	          
                                            if (CAPITALS.indexOf(workingString.charAt(0)) > -1)  {
                                            // the current string starts with a capital letter
	              
	                  if (  ( (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1) )   ||  ( (workingString.indexOf('á¾¿') > -1)  || (workingString.indexOf('á¿¾') > -1) || startString.charAt(1) == 'á¾¿' || startString.charAt(1) == 'á¿¾' )     ) {    
	                  // the current string either has no accent mark or it has a breathing mark (already or coming up)
	                  
	                      removeOne();
	                  } else {
	                  // the current string contains an accent mark without a breathing mark (already or coming up next)
	                  
	                      keepGoing = false;	                      
	                  }
	              } else {
	              // the current string starts with a non-capital letter
	                  removeOne();
	              }   
	          } else {
                                            keepGoing = false;  
	          }
	      } else  {
                                    // the next character is +
	      
	          if ( (DIERESIS.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Â¨') == -1) && (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1)  ) {
	          // the current strings starts with a letter that receives a dieresis and has no dieresis and has no breathing mark
	          
                                            if (CAPITALS.indexOf(workingString.charAt(0)) > -1) {
	              // the current string starts with a capital letter

  	                  if (  (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1)  ) {
                                                // the current string does not have any of the three accents (/, \, or =)
	                      removeOne();
	                  } else {
	                      keepGoing = false;
	                  }
	              } else {
	                  removeOne();
	              }
	          } else {
	              keepGoing = false;
	          }
	      }
	  } else {
	      keepGoing = false;
	  }
                            }
                        }
                    }     
                } // keep checking the next characters
       
                if (workingString.length > 1) { combineSingleCharacter(control); }

            } else {
            // this character cannot be combined with other characters

                if (workingString == 'Ïƒ' && TERMINAL.indexOf(startString.charAt(0)) > -1) {
                // this character is lowercase sigma and the next character 
                
                    workingString = 'Ï‚'; 
                } else {
	                if (workingString == 'Ïƒ' && startString.charAt(0) == "Ì£" && TERMINAL.indexOf(startString.charAt(1)) > -1) {
	                // this character is lowercase sigma and the next character 
	                	                workingString = 'Ï‚'; 
	                }
				}

            }
        } // don't do anything if this character was the end of the string
            
        finishString = finishString + workingString;
    }
    return;
}









/* ********************************************************************************************
   * combineSingleCharacter (object)
   *
   * This method receives a group of Latin characters in
   * beta code that BetaToUnicode has determined constitute
   * a single legitimate Unicode character; it returns the
   * Unicode character represented by that string of characters.
   * ******************************************************************************************** */

function combineSingleCharacter(control) {
    if (  (currentCursor - (workingString.length - 1) <= finishCursorStart) && (currentCursor >= finishCursorStart) ) {
    // the finish cursor is located at the end of any of the characters in the working string
        finishCursorStart = currentCursor - (workingString.length - 1);
    } else {
        if (currentCursor < finishCursorStart) {
        // the finish cursor is located after the end of any of the characters in the working string
            finishCursorStart = finishCursorStart - (workingString.length - 1);
        }
    }
    
    if (  (currentCursor - (workingString.length - 1) <= finishCursorEnd) && (currentCursor >= finishCursorEnd) ) {
    // the finish cursor is located at the end of any of the characters in the working string
        finishCursorEnd = currentCursor - (workingString.length - 1);
    } else {
        if (currentCursor < finishCursorEnd) {
        // the finish cursor is located after the end of any of the characters in the working string
            finishCursorEnd = finishCursorEnd - (workingString.length - 1);
        }
    }
	
    currentCursor = currentCursor - (workingString.length - 1);

    if (workingString.indexOf('Â´') != -1) {
    // if the string contains /
    
        if (workingString.indexOf('á¾¿') != -1) {
        // if the string contains )
                            
            if (workingString.indexOf('Íº') != -1) {
            // if the string contains |
                if (workingString.charAt(0) == "Î±") { workingString = "á¾„"; }            
                if (workingString.charAt(0) == "Î‘") { workingString = "á¾Œ"; }                            
                if (workingString.charAt(0) == "Î·") { workingString = "á¾”"; }            
                if (workingString.charAt(0) == "Î—") { workingString = "á¾œ"; } 
                if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¤"; }            
                if (workingString.charAt(0) == "Î©") { workingString = "á¾¬"; }                 
            } else {
                if (workingString.charAt(0) == "Î±") { workingString = "á¼„"; }
                if (workingString.charAt(0) == "Î‘") { workingString = "á¼Œ"; }   
                if (workingString.charAt(0) == "Î·") { workingString = "á¼¤"; }            
                if (workingString.charAt(0) == "Î—") { workingString = "á¼¬"; } 
                if (workingString.charAt(0) == "Ï‰") { workingString = "á½¤"; }            
                if (workingString.charAt(0) == "Î©") { workingString = "á½¬"; }                                 
                if (workingString.charAt(0) == "Îµ") { workingString = "á¼”"; }
                if (workingString.charAt(0) == "Î•") { workingString = "á¼œ"; }                
                if (workingString.charAt(0) == "Î¹") { workingString = "á¼´"; }
                if (workingString.charAt(0) == "Î™") { workingString = "á¼¼"; }                
                if (workingString.charAt(0) == "Î¿") { workingString = "á½„"; }
                if (workingString.charAt(0) == "ÎŸ") { workingString = "á½Œ"; }                                
                if (workingString.charAt(0) == "Ï…") { workingString = "á½”"; }                
            }
        } else {
            if (workingString.indexOf('á¿¾') != -1) {
            // if the string contains (

                if (workingString.indexOf('Íº') != -1) {
                // if the string contains |
                    if (workingString.charAt(0) == "Î±") { workingString = "á¾…"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¾"; } 
                    if (workingString.charAt(0) == "Î·") { workingString = "á¾•"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¾"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¥"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á¾­"; }                     
                } else {
                    if (workingString.charAt(0) == "Î±") { workingString = "á¼…"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¼"; }
                    if (workingString.charAt(0) == "Î·") { workingString = "á¼¥"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¼­"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á½¥"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á½­"; }                     
                    if (workingString.charAt(0) == "Îµ") { workingString = "á¼•"; }
                    if (workingString.charAt(0) == "Î•") { workingString = "á¼"; }                
                    if (workingString.charAt(0) == "Î¹") { workingString = "á¼µ"; }
                    if (workingString.charAt(0) == "Î™") { workingString = "á¼½"; }                    
                    if (workingString.charAt(0) == "Î¿") { workingString = "á½…"; }
                    if (workingString.charAt(0) == "ÎŸ") { workingString = "á½"; }                                    
                    if (workingString.charAt(0) == "Ï…") { workingString = "á½•"; }                    
                    if (workingString.charAt(0) == "Î¥") { workingString = "á½"; }                    
                }           
            } else {
            // if the string contains no breathing mark

                if (workingString.indexOf('Íº') != -1) {
                // if the string contains a |
                    if (workingString.charAt(0) == "Î±") { workingString = "á¾´"; }
                    if (workingString.charAt(0) == "Î·") { workingString = "á¿„"; }            
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á¿´"; }            
                } else {
                    if (workingString.indexOf('Â¨') != -1) {
                    // if the string contains contains +
                        if (workingString.charAt(0) == "Î¹") { workingString = "Î"; }                       
                        if (workingString.charAt(0) == "Ï…") { workingString = "Î°"; }                 
                    } else {
                    // if the string contains no | and no +
                        if (workingString.charAt(0) == "Î±") { workingString = "Î¬"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "Î†"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "Î®"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "Î‰"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "ÏŽ"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "Î"; }                         
                        if (workingString.charAt(0) == "Îµ") { workingString = "Î­"; }
                        if (workingString.charAt(0) == "Î•") { workingString = "Îˆ"; } 
                        if (workingString.charAt(0) == "Î¹") { workingString = "Î¯"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "ÎŠ"; }                        
                        if (workingString.charAt(0) == "Î¿") { workingString = "ÏŒ"; }
                        if (workingString.charAt(0) == "ÎŸ") { workingString = "ÎŒ"; }                         
                        if (workingString.charAt(0) == "Ï…") { workingString = "Ï"; }                        
                        if (workingString.charAt(0) == "Î¥") { workingString = "ÎŽ"; }                                                
                    }                
                }                
            }
        }
	    
    } else {
    
        if (workingString.indexOf('`') != -1) {
        // if the string contains a \
        
            if (workingString.indexOf('á¾¿') != -1) {
            // if the string contains a )
            
                if (workingString.indexOf('Íº') != -1) {
                // if the string contains a |
                
                    if (workingString.charAt(0) == "Î±") { workingString = "á¾‚"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¾Š"; }    
                    if (workingString.charAt(0) == "Î·") { workingString = "á¾’"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¾š"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¢"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á¾ª"; }                      	                
                } else {
	                
                    if (workingString.charAt(0) == "Î±") { workingString = "á¼‚"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¼Š"; }    
                    if (workingString.charAt(0) == "Î·") { workingString = "á¼¢"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¼ª"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á½¢"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á½ª"; }                      	                                    
                    if (workingString.charAt(0) == "Îµ") { workingString = "á¼’"; }
                    if (workingString.charAt(0) == "Î•") { workingString = "á¼š"; }   
                    if (workingString.charAt(0) == "Î¹") { workingString = "á¼²"; }
                    if (workingString.charAt(0) == "Î™") { workingString = "á¼º"; }                       
                    if (workingString.charAt(0) == "Î¿") { workingString = "á½‚"; }
                    if (workingString.charAt(0) == "ÎŸ") { workingString = "á½Š"; }                      
                    if (workingString.charAt(0) == "Ï…") { workingString = "á½’"; }
                }
            
            } else {
	            
                if (workingString.indexOf('á¿¾') != -1) {
                // if the string contains a (
	               
                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains a |                      
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾ƒ"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¾‹"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¾“"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¾›"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¾£"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á¾«"; }                           
                    } else {
                    // if the strings contains no iota
	                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¼ƒ"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¼‹"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¼£"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¼«"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á½£"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á½«"; }                        
                        if (workingString.charAt(0) == "Îµ") { workingString = "á¼“"; }
                        if (workingString.charAt(0) == "Î•") { workingString = "á¼›"; }                
                        if (workingString.charAt(0) == "Î¹") { workingString = "á¼³"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "á¼»"; }                        
                        if (workingString.charAt(0) == "Î¿") { workingString = "á½ƒ"; }
                        if (workingString.charAt(0) == "ÎŸ") { workingString = "á½‹"; }                              
                        if (workingString.charAt(0) == "Ï…") { workingString = "á½“"; }   
                        if (workingString.charAt(0) == "Î¥") { workingString = "á½›"; }   
                    }
                } else {
                // if the string contains no breathing mark

                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains |
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾²"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¿‚"; }            
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¿²"; }            
                    } else {
                    
                        if (workingString.indexOf('Â¨') != -1) {
                        // if the string contains + 
                        
                            if (workingString.charAt(0) == "Î¹") { workingString = "á¿’"; }   
                            if (workingString.charAt(0) == "Ï…") { workingString = "á¿¢"; }

                        } else {
                        // if the string contains no | or + 
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á½°"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾º"; }  
                            if (workingString.charAt(0) == "Î·") { workingString = "á½´"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¿Š"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á½¼"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¿º"; }                             
                            if (workingString.charAt(0) == "Îµ") { workingString = "á½²"; }
                            if (workingString.charAt(0) == "Î•") { workingString = "á¿ˆ"; }  
                            if (workingString.charAt(0) == "Î¹") { workingString = "á½¶"; }
                            if (workingString.charAt(0) == "Î™") { workingString = "á¿š"; }                              
                            if (workingString.charAt(0) == "Î¿") { workingString = "á½¸"; }
                            if (workingString.charAt(0) == "ÎŸ") { workingString = "á¿¸"; }                                                          
                            if (workingString.charAt(0) == "Ï…") { workingString = "á½º"; }
                            if (workingString.charAt(0) == "Î¥") { workingString = "á¿ª"; }                            
                        }                    
                    }           
                }
            }  
        } else {
    
            if (workingString.indexOf('á¿€') != -1) {
            // if the string contains a =
            
                if (workingString.indexOf('á¾¿') != -1) {
                // if the string contains a )
                
                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains a |                      
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾†"; }                
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¾Ž"; } 
                        if (workingString.charAt(0) == "Î·") { workingString = "á¾–"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¾ž"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¦"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á¾®"; }                                                     
                    } else {
                        if (workingString.charAt(0) == "Î±") { workingString = "á¼†"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¼Ž"; }                  
                        if (workingString.charAt(0) == "Î·") { workingString = "á¼¦"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¼®"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á½¦"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á½®"; }                                                                             
                        if (workingString.charAt(0) == "Î¹") { workingString = "á¼¶"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "á¼¾"; }                                          
                        if (workingString.charAt(0) == "Ï…") { workingString = "á½–"; }
                    }
                } else {
	                
                    if (workingString.indexOf('á¿¾') != -1) {
                    // if the string contains a (                  
	                
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains a |                      

                            if (workingString.charAt(0) == "Î±") { workingString = "á¾‡"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾"; }
                            if (workingString.charAt(0) == "Î·") { workingString = "á¾—"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¾Ÿ"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¾§"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¾¯"; }                             
                        } else {
                            if (workingString.charAt(0) == "Î±") { workingString = "á¼‡"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¼"; } 
                            if (workingString.charAt(0) == "Î·") { workingString = "á¼§"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¼¯"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á½§"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á½¯"; }                                                         
                            if (workingString.charAt(0) == "Î¹") { workingString = "á¼·"; }
                            if (workingString.charAt(0) == "Î™") { workingString = "á¼¿"; }                            
                            if (workingString.charAt(0) == "Ï…") { workingString = "á½—"; }                
                            if (workingString.charAt(0) == "Î¥") { workingString = "á½Ÿ"; }                                            
                        } 
                    } else {
                    // if the string contains no breathing marks
                    
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains a |                      
                            if (workingString.charAt(0) == "Î±") { workingString = "á¾·"; }
                            if (workingString.charAt(0) == "Î·") { workingString = "á¿‡"; }            
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¿·"; }                              
                        } else {
	                        
                            if (workingString.indexOf('Â¨') != -1) {
                            // if the string contains + 

                               if (workingString.charAt(0) == "Î¹") { workingString = "á¿—"; }
                               if (workingString.charAt(0) == "Ï…") { workingString = "á¿§"; }
                            } else {
                            // if the string contains no | or +                         
                                if (workingString.charAt(0) == "Î±") { workingString = "á¾¶"; }
                                if (workingString.charAt(0) == "Î·") { workingString = "á¿†"; }            
                                if (workingString.charAt(0) == "Ï‰") { workingString = "á¿¶"; }  	  
                                if (workingString.charAt(0) == "Î¹") { workingString = "á¿–"; }	  
                                if (workingString.charAt(0) == "Ï…") { workingString = "á¿¦"; }                
                            }
                        }                     
                    }                
                }
            } else {
            // if the string contains no accent marks
            
                if (workingString.indexOf('á¾¿') != -1) {
                // if the string contains )
            
                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains a |
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾€"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¾ˆ"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¾"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¾˜"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¾ "; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á¾¨"; }                          
                    } else {
                    // if the string contains no | and no +
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¼€"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¼ˆ"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¼ "; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¼¨"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á½ "; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á½¨"; }                           
                        if (workingString.charAt(0) == "Îµ") { workingString = "á¼"; }
                        if (workingString.charAt(0) == "Î•") { workingString = "á¼˜"; } 
                        if (workingString.charAt(0) == "Î¹") { workingString = "á¼°"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "á¼¸"; }                        
                        if (workingString.charAt(0) == "Î¿") { workingString = "á½€"; }
                        if (workingString.charAt(0) == "ÎŸ") { workingString = "á½ˆ"; }                          
                        if (workingString.charAt(0) == "Ï…") { workingString = "á½"; }
                    }        
                } else {
                    if (workingString.indexOf('á¿¾') != -1) {
                    // if the string contains (
     
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains a |                      
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á¾"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾‰"; }   
                            if (workingString.charAt(0) == "Î·") { workingString = "á¾‘"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¾™"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¡"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¾©"; }                             
                        } else {
                        // if the string contains no iota                      
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á¼"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¼‰"; }
                            if (workingString.charAt(0) == "Î·") { workingString = "á¼¡"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¼©"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á½¡"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á½©"; }                              
                            if (workingString.charAt(0) == "Îµ") { workingString = "á¼‘"; }
                            if (workingString.charAt(0) == "Î•") { workingString = "á¼™"; } 
                            if (workingString.charAt(0) == "Î¹") { workingString = "á¼±"; }
                            if (workingString.charAt(0) == "Î™") { workingString = "á¼¹"; }                            
                            if (workingString.charAt(0) == "Î¿") { workingString = "á½"; }
                            if (workingString.charAt(0) == "ÎŸ") { workingString = "á½‰"; }               
                            if (workingString.charAt(0) == "Î¡") { workingString = "á¿¬"; }                                                        
                            if (workingString.charAt(0) == "Ï") { workingString = "á¿¥"; }                
                            if (workingString.charAt(0) == "Ï…") { workingString = "á½‘"; }                
                            if (workingString.charAt(0) == "Î¥") { workingString = "á½™"; }
                        }         
                    } else {
                    // if the string contains no breathing marks
                    
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains an iota
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á¾³"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾¼"; }  
                            if (workingString.charAt(0) == "Î·") { workingString = "á¿ƒ"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¿Œ"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¿³"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¿¼"; }                            
                        } else {
                            if (workingString.indexOf('Â¨') != -1) {
                            // if the string contains a dieresis

                                if (workingString.charAt(0) == "Î¹") { workingString = "ÏŠ"; }
                                if (workingString.charAt(0) == "Î™") { workingString = "Îª"; } 
                                if (workingString.charAt(0) == "Ï…") { workingString = "Ï‹"; }
                                if (workingString.charAt(0) == "Î¥") { workingString = "Î«"; }	  
	  
                            } // if there are no marks at all, then do nothing
                        }
                    }
                }
            }
        }
    }
    return;
}









/* ********************************************************************************************
   * removeOne ()
   *
   *
   * 
   * 
   * 
   * ******************************************************************************************** */

function removeOne() {
    workingString = workingString + startString.substr(0,1);
    startString = startString.substr(1, startString.length - 1);
    currentCursor = currentCursor + 1;
return;
}
  </script>
  <script type="text/javascript">
    function setFocus() { document.greek.textArea.focus(); }
  </script>  

</head>
<div class="intro" style="position: absolute;">
  <img src="https://github.com/TechnoBoy101/pics/blob/main/aquamarine.PNG?raw=true" style="height: 200px; position: relative; width: 1325px;">
<img src="https://github.com/TechnoBoy101/pics/blob/main/Transator%20Logo%201.png?raw=true" style="height: 200px; position: absolute; left: 300px;">

<h1 style="position: absolute; left: 475px; top: 60px; font-size: 30px;">Greek Writing</h1>
<p style="position: absolute; left: 750px; top: 55px; font-size: 20px; color: grey; text-shadow: 50px;">Convert text from a standard keyboard into beautiful Greek characters as you type.</p>

</div>
<body id="home" onLoad="setFocus();" onClick="setFocus();">

  <scripttype="text/javascript">
    //-- Google Analytics Urchin Module
//-- Copyright 2007 Google, All Rights Reserved.

//-- Urchin On Demand Settings ONLY
var _uacct="";			// set up the Urchin Account
var _userv=1;			// service mode (0=local,1=remote,2=both)

//-- UTM User Settings
var _ufsc=1;			// set client info flag (1=on|0=off)
var _udn="auto";		// (auto|none|domain) set the domain name for cookies
var _uhash="on";		// (on|off) unique domain hash for cookies
var _utimeout="1800";   	// set the inactive session timeout in seconds
var _ugifpath="/__utm.gif";	// set the web path to the __utm.gif file
var _utsp="|";			// transaction field separator
var _uflash=1;			// set flash version detect option (1=on|0=off)
var _utitle=1;			// set the document title detect option (1=on|0=off)
var _ulink=0;			// enable linker functionality (1=on|0=off)
var _uanchor=0;			// enable use of anchors for campaign (1=on|0=off)
var _utcp="/";			// the cookie path for tracking
var _usample=100;		// The sampling % of visitors to track (1-100).

//-- UTM Campaign Tracking Settings
var _uctm=1;			// set campaign tracking module (1=on|0=off)
var _ucto="15768000";		// set timeout in seconds (6 month default)
var _uccn="utm_campaign";	// name
var _ucmd="utm_medium";		// medium (cpc|cpm|link|email|organic)
var _ucsr="utm_source";		// source
var _uctr="utm_term";		// term/keyword
var _ucct="utm_content";	// content
var _ucid="utm_id";		// id number
var _ucno="utm_nooverride";	// don't override

//-- Auto/Organic Sources and Keywords
var _uOsr=new Array();
var _uOkw=new Array();
_uOsr[0]="google";	_uOkw[0]="q";
_uOsr[1]="yahoo";	_uOkw[1]="p";
_uOsr[2]="msn";		_uOkw[2]="q";
_uOsr[3]="aol";		_uOkw[3]="query";
_uOsr[4]="aol";		_uOkw[4]="encquery";
_uOsr[5]="lycos";	_uOkw[5]="query";
_uOsr[6]="ask";		_uOkw[6]="q";
_uOsr[7]="altavista";	_uOkw[7]="q";
_uOsr[8]="netscape";	_uOkw[8]="query";
_uOsr[9]="cnn";	_uOkw[9]="query";
_uOsr[10]="looksmart";	_uOkw[10]="qt";
_uOsr[11]="about";	_uOkw[11]="terms";
_uOsr[12]="mamma";	_uOkw[12]="query";
_uOsr[13]="alltheweb";	_uOkw[13]="q";
_uOsr[14]="gigablast";	_uOkw[14]="q";
_uOsr[15]="voila";	_uOkw[15]="rdata";
_uOsr[16]="virgilio";	_uOkw[16]="qs";
_uOsr[17]="live";	_uOkw[17]="q";
_uOsr[18]="baidu";	_uOkw[18]="wd";
_uOsr[19]="alice";	_uOkw[19]="qs";
_uOsr[20]="yandex";	_uOkw[20]="text";
_uOsr[21]="najdi";	_uOkw[21]="q";
_uOsr[22]="aol";	_uOkw[22]="q";
_uOsr[23]="club-internet"; _uOkw[23]="query";
_uOsr[24]="mama";	_uOkw[24]="query";
_uOsr[25]="seznam";	_uOkw[25]="q";
_uOsr[26]="search";	_uOkw[26]="q";
_uOsr[27]="wp";	_uOkw[27]="szukaj";
_uOsr[28]="onet";	_uOkw[28]="qt";
_uOsr[29]="netsprint";	_uOkw[29]="q";
_uOsr[30]="google.interia";	_uOkw[30]="q";
_uOsr[31]="szukacz";	_uOkw[31]="q";
_uOsr[32]="yam";	_uOkw[32]="k";
_uOsr[33]="pchome";	_uOkw[33]="q";
_uOsr[34]="kvasir";	_uOkw[34]="searchExpr";
_uOsr[35]="sesam";	_uOkw[35]="q";
_uOsr[36]="ozu"; _uOkw[36]="q";
_uOsr[37]="terra"; _uOkw[37]="query";
_uOsr[38]="nostrum"; _uOkw[38]="query";
_uOsr[39]="mynet"; _uOkw[39]="q";
_uOsr[40]="ekolay"; _uOkw[40]="q";
_uOsr[41]="search.ilse"; _uOkw[41]="search_for";
_uOsr[42]="bing"; _uOkw[42]="q";

//-- Auto/Organic Keywords to Ignore
var _uOno=new Array();
//_uOno[0]="urchin";
//_uOno[1]="urchin.com";
//_uOno[2]="www.urchin.com";

//-- Referral domains to Ignore
var _uRno=new Array();
//_uRno[0]=".urchin.com";

//-- **** Don't modify below this point ***
var _uff,_udh,_udt,_ubl=0,_udo="",_uu,_ufns=0,_uns=0,_ur="-",_ufno=0,_ust=0,_ubd=document,_udl=_ubd.location,_udlh="",_uwv="1.4";
var _ugifpath2="http://www.google-analytics.com/__utm.gif";
if (_udl.hash) _udlh=_udl.href.substring(_udl.href.indexOf('#'));
if (_udl.protocol=="https:") _ugifpath2="https://ssl.google-analytics.com/__utm.gif";
if (!_utcp || _utcp=="") _utcp="/";
function urchinTracker(page) {
 if (_udl.protocol=="file:") return;
 if (_uff && (!page || page=="")) return;
 var a,b,c,xx,v,z,k,x="",s="",f=0,nv=0;
 var nx=" expires="+_uNx()+";";
 var dc=_ubd.cookie;
 _udh=_uDomain();
 if (!_uVG()) return;
 _uu=Math.round(Math.random()*2147483647);
 _udt=new Date();
 _ust=Math.round(_udt.getTime()/1000);
 a=dc.indexOf("__utma="+_udh+".");
 b=dc.indexOf("__utmb="+_udh);
 c=dc.indexOf("__utmc="+_udh);
 if (_udn && _udn!="") { _udo=" domain="+_udn+";"; }
 if (_utimeout && _utimeout!="") {
  x=new Date(_udt.getTime()+(_utimeout*1000));
  x=" expires="+x.toGMTString()+";";
 }
 if (_ulink) {
  if (_uanchor && _udlh && _udlh!="") s=_udlh+"&";
  s+=_udl.search;
  if(s && s!="" && s.indexOf("__utma=")>=0) {
   if (!(_uIN(a=_uGC(s,"__utma=","&")))) a="-";
   if (!(_uIN(b=_uGC(s,"__utmb=","&")))) b="-";
   if (!(_uIN(c=_uGC(s,"__utmc=","&")))) c="-";
   v=_uGC(s,"__utmv=","&");
   z=_uGC(s,"__utmz=","&");
   k=_uGC(s,"__utmk=","&");
   xx=_uGC(s,"__utmx=","&");
   if ((k*1) != ((_uHash(a+b+c+xx+z+v)*1)+(_udh*1))) {_ubl=1;a="-";b="-";c="-";xx="-";z="-";v="-";}
   if (a!="-" && b!="-" && c!="-") f=1;
   else if(a!="-") f=2;
  }
 }
 if(f==1) {
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+b+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+c+"; path="+_utcp+";"+_udo;
 } else if (f==2) {
  a=_uFixA(s,"&",_ust);
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
  _ufns=1;
 } else if (a>=0 && b>=0 && c>=0) {
   b = _uGC(dc,"__utmb="+_udh,";");
   b = ("-" == b) ? _udh : b;  
  _ubd.cookie="__utmb="+b+"; path="+_utcp+";"+x+_udo;
 } else {
  if (a>=0) a=_uFixA(_ubd.cookie,";",_ust);
  else {
   a=_udh+"."+_uu+"."+_ust+"."+_ust+"."+_ust+".1";
   nv=1;
  }
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
  _ufns=1;
 }
 if (_ulink && xx && xx!="" && xx!="-") {
   xx=_uUES(xx);
   if (xx.indexOf(";")==-1) _ubd.cookie="__utmx="+xx+"; path="+_utcp+";"+nx+_udo;
 }
 if (_ulink && v && v!="" && v!="-") {
  v=_uUES(v);
  if (v.indexOf(";")==-1) _ubd.cookie="__utmv="+v+"; path="+_utcp+";"+nx+_udo;
 }
 var wc=window;
 var c=_ubd.cookie;
 if(wc && wc.gaGlobal && wc.gaGlobal.dh==_udh){
  var g=wc.gaGlobal;
  var ua=c.split("__utma="+_udh+".")[1].split(";")[0].split(".");
  if(g.sid)ua[3]=g.sid;
  if(nv>0){
   ua[2]=ua[3];
   if(g.vid){
    var v=g.vid.split(".");
    ua[0]=v[0];
    ua[1]=v[1];
   }
  }
  _ubd.cookie="__utma="+_udh+"."+ua.join(".")+"; path="+_utcp+";"+nx+_udo;
 }
 _uInfo(page);
 _ufns=0;
 _ufno=0;
 if (!page || page=="") _uff=1;
}
function _uGH() {
 var hid;
 var wc=window;
 if (wc && wc.gaGlobal && wc.gaGlobal.hid) {
  hid=wc.gaGlobal.hid;
 } else {
  hid=Math.round(Math.random()*0x7fffffff);
  if (!wc.gaGlobal) wc.gaGlobal={};
  wc.gaGlobal.hid=hid;
 }
 return hid;
}
function _uInfo(page) {
 var p,s="",dm="",pg=_udl.pathname+_udl.search;
 if (page && page!="") pg=_uES(page,1);
 _ur=_ubd.referrer;
 if (!_ur || _ur=="") { _ur="-"; }
 else {
  dm=_ubd.domain;
  if(_utcp && _utcp!="/") dm+=_utcp;
  p=_ur.indexOf(dm);
  if ((p>=0) && (p<=8)) { _ur="0"; }
  if (_ur.indexOf("[")==0 && _ur.lastIndexOf("]")==(_ur.length-1)) { _ur="-"; }
 }
 s+="&utmn="+_uu;
 if (_ufsc) s+=_uBInfo();
 if (_uctm) s+=_uCInfo();
 if (_utitle && _ubd.title && _ubd.title!="") s+="&utmdt="+_uES(_ubd.title);
 if (_udl.hostname && _udl.hostname!="") s+="&utmhn="+_uES(_udl.hostname);
 if (_usample && _usample != 100) s+="&utmsp="+_uES(_usample);
 s+="&utmhid="+_uGH();
 s+="&utmr="+_ur;
 s+="&utmp="+pg;
 if ((_userv==0 || _userv==2) && _uSP()) {
  var i=new Image(1,1);
  i.src=_ugifpath+"?"+"utmwv="+_uwv+s;
  i.onload=function() { _uVoid(); }
 }
 if ((_userv==1 || _userv==2) && _uSP()) {
  var i2=new Image(1,1);
  i2.src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+_uGCS();
  i2.onload=function() { _uVoid(); }
 }
 return;
}
function _uVoid() { return; }
function _uCInfo() {
 if (!_ucto || _ucto=="") { _ucto="15768000"; }
 if (!_uVG()) return;
 var c="",t="-",t2="-",t3="-",o=0,cs=0,cn=0,i=0,z="-",s="";
 if (_uanchor && _udlh && _udlh!="") s=_udlh+"&";
 s+=_udl.search;
 var x=new Date(_udt.getTime()+(_ucto*1000));
 var dc=_ubd.cookie;
 x=" expires="+x.toGMTString()+";";
 if (_ulink && !_ubl) {
  z=_uUES(_uGC(s,"__utmz=","&"));
  if (z!="-" && z.indexOf(";")==-1) { _ubd.cookie="__utmz="+z+"; path="+_utcp+";"+x+_udo; return ""; }
 }
 z=dc.indexOf("__utmz="+_udh+".");
 if (z>-1) { z=_uGC(dc,"__utmz="+_udh+".",";"); }
 else { z="-"; }
 t=_uGC(s,_ucid+"=","&");
 t2=_uGC(s,_ucsr+"=","&");
 t3=_uGC(s,"gclid=","&");
 if ((t!="-" && t!="") || (t2!="-" && t2!="") || (t3!="-" && t3!="")) {
  if (t!="-" && t!="") c+="utmcid="+_uEC(t);
  if (t2!="-" && t2!="") { if (c != "") c+="|"; c+="utmcsr="+_uEC(t2); }
  if (t3!="-" && t3!="") { if (c != "") c+="|"; c+="utmgclid="+_uEC(t3); }
  t=_uGC(s,_uccn+"=","&");
  if (t!="-" && t!="") c+="|utmccn="+_uEC(t);
  else c+="|utmccn=(not+set)";
  t=_uGC(s,_ucmd+"=","&");
  if (t!="-" && t!="") c+="|utmcmd="+_uEC(t);
  else  c+="|utmcmd=(not+set)";
  t=_uGC(s,_uctr+"=","&");
  if (t!="-" && t!="") c+="|utmctr="+_uEC(t);
  else { t=_uOrg(1); if (t!="-" && t!="") c+="|utmctr="+_uEC(t); }
  t=_uGC(s,_ucct+"=","&");
  if (t!="-" && t!="") c+="|utmcct="+_uEC(t);
  t=_uGC(s,_ucno+"=","&");
  if (t=="1") o=1;
  if (z!="-" && o==1) return "";
 }
 if (c=="-" || c=="") { c=_uOrg(); if (z!="-" && _ufno==1)  return ""; }
 if (c=="-" || c=="") { if (_ufns==1)  c=_uRef(); if (z!="-" && _ufno==1)  return ""; }
 if (c=="-" || c=="") {
  if (z=="-" && _ufns==1) { c="utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)"; }
  if (c=="-" || c=="") return "";
 }
 if (z!="-") {
  i=z.indexOf(".");
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  t=z.substring(i+1,z.length);
  if (t.toLowerCase()==c.toLowerCase()) cs=1;
  t=z.substring(0,i);
  if ((i=t.lastIndexOf(".")) > -1) {
   t=t.substring(i+1,t.length);
   cn=(t*1);
  }
 }
 if (cs==0 || _ufns==1) {
  t=_uGC(dc,"__utma="+_udh+".",";");
  if ((i=t.lastIndexOf(".")) > 9) {
   _uns=t.substring(i+1,t.length);
   _uns=(_uns*1);
  }
  cn++;
  if (_uns==0) _uns=1;
  _ubd.cookie="__utmz="+_udh+"."+_ust+"."+_uns+"."+cn+"."+c+"; path="+_utcp+"; "+x+_udo;
 }
 if (cs==0 || _ufns==1) return "&utmcn=1";
 else return "&utmcr=1";
}
function _uRef() {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k,n;
 if ((i=_ur.indexOf("://"))<0 || _uGCse()) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  k=h.substring(h.indexOf("/"),h.length);
  if (k.indexOf("?") > -1) k=k.substring(0,k.indexOf("?"));
  h=h.substring(0,h.indexOf("/"));
 }
 h=h.toLowerCase();
 n=h;
 if ((i=n.indexOf(":")) > -1) n=n.substring(0,i);
 for (var ii=0;ii<_uRno.length;ii++) {
  if ((i=n.indexOf(_uRno[ii].toLowerCase())) > -1 && n.length==(i+_uRno[ii].length)) { _ufno=1; break; }
 }
 if (h.indexOf("www.")==0) h=h.substring(4,h.length);
 return "utmccn=(referral)|utmcsr="+_uEC(h)+"|"+"utmcct="+_uEC(k)+"|utmcmd=referral";
}
function _uOrg(t) {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k;
 if ((i=_ur.indexOf("://"))<0 || _uGCse()) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  h=h.substring(0,h.indexOf("/"));
 }
 for (var ii=0;ii<_uOsr.length;ii++) {
  if (h.toLowerCase().indexOf(_uOsr[ii].toLowerCase()) > -1) {
   if ((i=_ur.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=_ur.indexOf("&"+_uOkw[ii]+"=")) > -1) {
    k=_ur.substring(i+_uOkw[ii].length+2,_ur.length);
    if ((i=k.indexOf("&")) > -1) k=k.substring(0,i);
    for (var yy=0;yy<_uOno.length;yy++) {
     if (_uOno[yy].toLowerCase()==k.toLowerCase()) { _ufno=1; break; }
    }
    if (t) return _uEC(k);
    else return "utmccn=(organic)|utmcsr="+_uEC(_uOsr[ii])+"|"+"utmctr="+_uEC(k)+"|utmcmd=organic";
   }
  }
 }
 return "";
}
function _uGCse() {
 var h,p;
 h=p=_ur.split("://")[1];
 if(h.indexOf("/")>-1) {
  h=h.split("/")[0];
  p=p.substring(p.indexOf("/")+1,p.length);
 }
 if(p.indexOf("?")>-1) {
  p=p.split("?")[0];
 }
 if(h.toLowerCase().indexOf("google")>-1) {
  if(_ur.indexOf("?q=")>-1 || _ur.indexOf("&q=")>-1) {
   if (p.toLowerCase().indexOf("cse")>-1) {
    return true;
   }
  }
 }
}
function _uBInfo() {
 var sr="-",sc="-",ul="-",fl="-",cs="-",je=1;
 var n=navigator;
 if (self.screen) {
  sr=screen.width+"x"+screen.height;
  sc=screen.colorDepth+"-bit";
 } else if (self.java) {
  var j=java.awt.Toolkit.getDefaultToolkit();
  var s=j.getScreenSize();
  sr=s.width+"x"+s.height;
 }
 if (n.language) { ul=n.language.toLowerCase(); }
 else if (n.browserLanguage) { ul=n.browserLanguage.toLowerCase(); }
 je=n.javaEnabled()?1:0;
 if (_uflash) fl=_uFlash();
 if (_ubd.characterSet) cs=_uES(_ubd.characterSet);
 else if (_ubd.charset) cs=_uES(_ubd.charset);
 return "&utmcs="+cs+"&utmsr="+sr+"&utmsc="+sc+"&utmul="+ul+"&utmje="+je+"&utmfl="+fl;
}
function __utmSetTrans() {
 var e;
 if (_ubd.getElementById) e=_ubd.getElementById("utmtrans");
 else if (_ubd.utmform && _ubd.utmform.utmtrans) e=_ubd.utmform.utmtrans;
 if (!e) return;
 var l=e.value.split("UTM:");
 var i,i2,c;
 if (_userv==0 || _userv==2) i=new Array();
 if (_userv==1 || _userv==2) { i2=new Array(); c=_uGCS(); }

 for (var ii=0;ii<l.length;ii++) {
  l[ii]=_uTrim(l[ii]);
  if (l[ii].charAt(0)!='T' && l[ii].charAt(0)!='I') continue;
  var r=Math.round(Math.random()*2147483647);
  if (!_utsp || _utsp=="") _utsp="|";
  var f=l[ii].split(_utsp),s="";
  if (f[0].charAt(0)=='T') {
   s="&utmt=tran"+"&utmn="+r;
   f[1]=_uTrim(f[1]); if(f[1]&&f[1]!="") s+="&utmtid="+_uES(f[1]);
   f[2]=_uTrim(f[2]); if(f[2]&&f[2]!="") s+="&utmtst="+_uES(f[2]);
   f[3]=_uTrim(f[3]); if(f[3]&&f[3]!="") s+="&utmtto="+_uES(f[3]);
   f[4]=_uTrim(f[4]); if(f[4]&&f[4]!="") s+="&utmttx="+_uES(f[4]);
   f[5]=_uTrim(f[5]); if(f[5]&&f[5]!="") s+="&utmtsp="+_uES(f[5]);
   f[6]=_uTrim(f[6]); if(f[6]&&f[6]!="") s+="&utmtci="+_uES(f[6]);
   f[7]=_uTrim(f[7]); if(f[7]&&f[7]!="") s+="&utmtrg="+_uES(f[7]);
   f[8]=_uTrim(f[8]); if(f[8]&&f[8]!="") s+="&utmtco="+_uES(f[8]);
  } else {
   s="&utmt=item"+"&utmn="+r;
   f[1]=_uTrim(f[1]); if(f[1]&&f[1]!="") s+="&utmtid="+_uES(f[1]);
   f[2]=_uTrim(f[2]); if(f[2]&&f[2]!="") s+="&utmipc="+_uES(f[2]);
   f[3]=_uTrim(f[3]); if(f[3]&&f[3]!="") s+="&utmipn="+_uES(f[3]);
   f[4]=_uTrim(f[4]); if(f[4]&&f[4]!="") s+="&utmiva="+_uES(f[4]);
   f[5]=_uTrim(f[5]); if(f[5]&&f[5]!="") s+="&utmipr="+_uES(f[5]);
   f[6]=_uTrim(f[6]); if(f[6]&&f[6]!="") s+="&utmiqt="+_uES(f[6]);
  }
  if (_udl.hostname && _udl.hostname!="") s+="&utmhn="+_uES(_udl.hostname);
  if (_usample && _usample != 100) s+="&utmsp="+_uES(_usample);

  if ((_userv==0 || _userv==2) && _uSP()) {
   i[ii]=new Image(1,1);
   i[ii].src=_ugifpath+"?"+"utmwv="+_uwv+s;
   i[ii].onload=function() { _uVoid(); }
  }
  if ((_userv==1 || _userv==2) && _uSP()) {
   i2[ii]=new Image(1,1);
   i2[ii].src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+c;
   i2[ii].onload=function() { _uVoid(); }
  }
 }
 return;
}
function _uFlash() {
 var f="-",n=navigator;
 if (n.plugins && n.plugins.length) {
  for (var ii=0;ii<n.plugins.length;ii++) {
   if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
    f=n.plugins[ii].description.split('Shockwave Flash ')[1];
    break;
   }
  }
 } else {
  var fl;
  try {
   fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
   f = fl.GetVariable("$version");
  } catch(e) {}
  if (f == "-") {
   try {
    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
    f = "WIN 6,0,21,0";
    fl.AllowScriptAccess = "always";
    f = fl.GetVariable("$version");
   } catch(e) {}
  }
  if (f == "-") {
   try {
    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    f = fl.GetVariable("$version");
   } catch(e) {}
  }
  if (f != "-") {
   f = f.split(" ")[1].split(",");
   f = f[0] + "." + f[1] + " r" + f[2];
  }
 }
 return f;
}
function __utmLinkerUrl(l,h) {
 var p,k,a="-",b="-",c="-",x="-",z="-",v="-";
 var dc=_ubd.cookie;
 var iq = l.indexOf("?");
 var ih = l.indexOf("#");
 var url=l;
 if (dc) {
  a=_uES(_uGC(dc,"__utma="+_udh+".",";"));
  b=_uES(_uGC(dc,"__utmb="+_udh,";"));
  c=_uES(_uGC(dc,"__utmc="+_udh,";"));
  x=_uES(_uGC(dc,"__utmx="+_udh,";"));
  z=_uES(_uGC(dc,"__utmz="+_udh+".",";"));
  v=_uES(_uGC(dc,"__utmv="+_udh+".",";"));
  k=(_uHash(a+b+c+x+z+v)*1)+(_udh*1);
  p="__utma="+a+"&__utmb="+b+"&__utmc="+c+"&__utmx="+x+"&__utmz="+z+"&__utmv="+v+"&__utmk="+k;
 }
 if (p) {
  if (h && ih>-1) return;
  if (h) { url=l+"#"+p; }
  else {
   if (iq==-1 && ih==-1) url=l+"?"+p;
   else if (ih==-1) url=l+"&"+p;
   else if (iq==-1) url=l.substring(0,ih-1)+"?"+p+l.substring(ih);
   else url=l.substring(0,ih-1)+"&"+p+l.substring(ih);
  }
 }
 return url;
}
function __utmLinker(l,h) {
 if (!_ulink || !l || l=="") return;
 _udl.href=__utmLinkerUrl(l,h);
}
function __utmLinkPost(f,h) {
 if (!_ulink || !f || !f.action) return;
 f.action=__utmLinkerUrl(f.action, h);
 return;
}
function __utmSetVar(v) {
 if (!v || v=="") return;
 if (!_udo || _udo == "") {
  _udh=_uDomain();
  if (_udn && _udn!="") { _udo=" domain="+_udn+";"; }
 }
 if (!_uVG()) return;
 var r=Math.round(Math.random() * 2147483647);
 _ubd.cookie="__utmv="+_udh+"."+_uES(v)+"; path="+_utcp+"; expires="+_uNx()+";"+_udo;
 var s="&utmt=var&utmn="+r;
 if (_usample && _usample != 100) s+="&utmsp="+_uES(_usample);
 if ((_userv==0 || _userv==2) && _uSP()) {
  var i=new Image(1,1);
  i.src=_ugifpath+"?"+"utmwv="+_uwv+s;
  i.onload=function() { _uVoid(); }
 }
 if ((_userv==1 || _userv==2) && _uSP()) {
  var i2=new Image(1,1);
  i2.src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+_uGCS();
  i2.onload=function() { _uVoid(); }
 }
}
function _uGCS() {
 var t,c="",dc=_ubd.cookie;
 if ((t=_uGC(dc,"__utma="+_udh+".",";"))!="-") c+=_uES("__utma="+t+";+");
 if ((t=_uGC(dc,"__utmx="+_udh,";"))!="-") c+=_uES("__utmx="+t+";+");
 if ((t=_uGC(dc,"__utmz="+_udh+".",";"))!="-") c+=_uES("__utmz="+t+";+");
 if ((t=_uGC(dc,"__utmv="+_udh+".",";"))!="-") c+=_uES("__utmv="+t+";");
 if (c.charAt(c.length-1)=="+") c=c.substring(0,c.length-1);
 return c;
}
function _uGC(l,n,s) {
 if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
 var i,i2,i3,c="-";
 i=l.indexOf(n);
 i3=n.indexOf("=")+1;
 if (i > -1) {
  i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
  c=l.substring((i+i3),i2);
 }
 return c;
}
function _uDomain() {
 if (!_udn || _udn=="" || _udn=="none") { _udn=""; return 1; }
 if (_udn=="auto") {
  var d=_ubd.domain;
  if (d.substring(0,4)=="www.") {
   d=d.substring(4,d.length);
  }
  _udn=d;
 }
 _udn = _udn.toLowerCase(); 
 if (_uhash=="off") return 1;
 return _uHash(_udn);
}
function _uHash(d) {
 if (!d || d=="") return 1;
 var h=0,g=0;
 for (var i=d.length-1;i>=0;i--) {
  var c=parseInt(d.charCodeAt(i));
  h=((h << 6) & 0xfffffff) + c + (c << 14);
  if ((g=h & 0xfe00000)!=0) h=(h ^ (g >> 21));
 }
 return h;
}
function _uFixA(c,s,t) {
 if (!c || c=="" || !s || s=="" || !t || t=="") return "-";
 var a=_uGC(c,"__utma="+_udh+".",s);
 var lt=0,i=0;
 if ((i=a.lastIndexOf(".")) > 9) {
  _uns=a.substring(i+1,a.length);
  _uns=(_uns*1)+1;
  a=a.substring(0,i);
  if ((i=a.lastIndexOf(".")) > 7) {
   lt=a.substring(i+1,a.length);
   a=a.substring(0,i);
  }
  if ((i=a.lastIndexOf(".")) > 5) {
   a=a.substring(0,i);
  }
  a+="."+lt+"."+t+"."+_uns;
 }
 return a;
}
function _uTrim(s) {
  if (!s || s=="") return "";
  while ((s.charAt(0)==' ') || (s.charAt(0)=='\n') || (s.charAt(0,1)=='\r')) s=s.substring(1,s.length);
  while ((s.charAt(s.length-1)==' ') || (s.charAt(s.length-1)=='\n') || (s.charAt(s.length-1)=='\r')) s=s.substring(0,s.length-1);
  return s;
}
function _uEC(s) {
  var n="";
  if (!s || s=="") return "";
  for (var i=0;i<s.length;i++) {if (s.charAt(i)==" ") n+="+"; else n+=s.charAt(i);}
  return n;
}
function __utmVisitorCode(f) {
 var r=0,t=0,i=0,i2=0,m=31;
 var a=_uGC(_ubd.cookie,"__utma="+_udh+".",";");
 if ((i=a.indexOf(".",0))<0) return;
 if ((i2=a.indexOf(".",i+1))>0) r=a.substring(i+1,i2); else return "";  
 if ((i=a.indexOf(".",i2+1))>0) t=a.substring(i2+1,i); else return "";  
 if (f) {
  return r;
 } else {
  var c=new Array('A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9');
  return c[r>>28&m]+c[r>>23&m]+c[r>>18&m]+c[r>>13&m]+"-"+c[r>>8&m]+c[r>>3&m]+c[((r&7)<<2)+(t>>30&3)]+c[t>>25&m]+c[t>>20&m]+"-"+c[t>>15&m]+c[t>>10&m]+c[t>>5&m]+c[t&m];
 }
}
function _uIN(n) {
 if (!n) return false;
 for (var i=0;i<n.length;i++) {
  var c=n.charAt(i);
  if ((c<"0" || c>"9") && (c!=".")) return false;
 }
 return true;
}
function _uES(s,u) {
 if (typeof(encodeURIComponent) == 'function') {
  if (u) return encodeURI(s);
  else return encodeURIComponent(s);
 } else {
  return escape(s);
 }
}
function _uUES(s) {
 if (typeof(decodeURIComponent) == 'function') {
  return decodeURIComponent(s);
 } else {
  return unescape(s);
 }
}
function _uVG() {
 if((_udn.indexOf("www.google.") == 0 || _udn.indexOf(".google.") == 0 || _udn.indexOf("google.") == 0) && _utcp=='/' && _udn.indexOf("google.org")==-1) {
  return false;
 }
 return true;
}
function _uSP() {
 var s=100;
 if (_usample) s=_usample;
 if(s>=100 || s<=0) return true;
 return ((__utmVisitorCode(1)%10000)<(s*100));
}
function urchinPathCopy(p){
 var d=document,nx,tx,sx,i,c,cs,t,h,o;
 cs=new Array("a","b","c","v","x","z");
 h=_uDomain(); if (_udn && _udn!="") o=" domain="+_udn+";";
 nx=_uNx()+";";
 tx=new Date(); tx.setTime(tx.getTime()+(_utimeout*1000));
 tx=tx.toGMTString()+";";
 sx=new Date(); sx.setTime(sx.getTime()+(_ucto*1000));
 sx=sx.toGMTString()+";";
 for (i=0;i<6;i++){
  t=" expires=";
  if (i==1) t+=tx; else if (i==2) t=""; else if (i==5) t+=sx; else t+=nx;
  c=_uGC(d.cookie,"__utm"+cs[i]+"="+h,";");
  if (c!="-") d.cookie="__utm"+cs[i]+"="+c+"; path="+p+";"+t+o;
 }
}
function _uCO() {
 if (!_utk || _utk=="" || _utk.length<10) return;
 var d='www.google.com';
 if (_utk.charAt(0)=='!') d='analytics.corp.google.com';
 _ubd.cookie="GASO="+_utk+"; path="+_utcp+";"+_udo;
 var sc=document.createElement('script');
 sc.type='text/javascript';
 sc.id="_gasojs";
 sc.src='https://'+d+'/analytics/reporting/overlay_js?gaso='+_utk+'&'+Math.random();
 document.getElementsByTagName('head')[0].appendChild(sc);  
}
function _uGT() {
 var h=location.hash, a;
 if (h && h!="" && h.indexOf("#gaso=")==0) {
  a=_uGC(h,"gaso=","&");
 } else {
  a=_uGC(_ubd.cookie,"GASO=",";");
 }
 return a;
}
var _utk=_uGT();
if (_utk && _utk!="" && _utk.length>10 && _utk.indexOf("=")==-1) {
 if (window.addEventListener) {
  window.addEventListener('load', _uCO, false); 
 } else if (window.attachEvent) { 
  window.attachEvent('onload', _uCO);
 }
}

function _uNx() {
  return (new Date((new Date()).getTime()+63072000000)).toGMTString();
}
