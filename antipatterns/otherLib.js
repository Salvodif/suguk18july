// Crash lib
var myNewObj = function ( ) { };

myNewObj.download = function ( ) {
    return "otherLib->download";
};

function GetPostCode ( ) {
    return "otherLib->GetPostCode";
}

$( document )
    .ready (
        function ( ) {
            console.log ( myNewObj.download ( ) );
            console.log ( GetPostCode ( ) );
        }
    );
