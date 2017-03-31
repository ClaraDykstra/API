  window.onload = function (e)
    {
        var canvas  = document.getElementById('cvs');
        var context = canvas.getContext('2d');
        
        // Draw the rectangle
        context.beginPath();
        context.rect(50,50,100,100);
        context.fill();
        
        context.fillStyle = 'red';
        
        // Draw the circle
        context.beginPath();
        context.arc(450,175, 50, 0,2 * Math.PI, false);
        context.fill();
            
        context.fillStyle = 'green';
        
        // Draw the shape
        context.beginPath();
        context.moveTo(250,100);
        context.lineTo(350,175);
        context.lineTo(325,215);
        context.lineTo(185,195);
        context.fill();



        canvas.onmousemove = function (e)
        {
            var canvas = e.target;
            var context = canvas.getContext('2d');

            // This gets the mouse coordinates (relative to the canvas)
            var mouseXY = RGraph.getMouseXY(e);
            var mouseX  = mouseXY[0];
            var mouseY  = mouseXY[1];


            // Replay the rectangle path (no need to fill() it) and test it
            context.beginPath();
            context.rect(50,50,100,100);
            
            if (context.isPointInPath(mouseX, mouseY)) {
                canvas.style.cursor = 'pointer';
                return;
            }
            ///////////////////////////////////////////////////////////////


            // Replay the circle path (no need to fill() it) and test it
            context.beginPath();
            context.arc(450,175, 50, 0,2 * Math.PI, false);
            
            if (context.isPointInPath(mouseX, mouseY)) {
                canvas.style.cursor = 'pointer';
                return;
            }
            ///////////////////////////////////////////////////////////////


            // Replay the irregular shape path (no need to fill() it) and test it
            context.beginPath();
            context.moveTo(250,100);
            context.lineTo(350,175);
            context.lineTo(325,215);
            context.lineTo(185,195);
            
            if (context.isPointInPath(mouseX, mouseY)) {
                canvas.style.cursor = 'pointer';
                return;
            }
            ///////////////////////////////////////////////////////////////


            // Return the cursor to the default style
            canvas.style.cursor = 'default';
        }
    }