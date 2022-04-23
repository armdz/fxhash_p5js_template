let fxColorPalette = new Array();

//  random function based on fxhash
function    randomd(_min,_max)
{
    return fxrand() * (_max - _min) + _min;
}

function    randomdi(_min,_max)
{
    return Math.floor(randomd(_min,_max));
}

function  randomAngleLock(lock)
{
  var randomAngle = Math.floor(randomd(0.0,360)/lock)*lock;
  return (randomAngle);
}

function  randomFrom(array)
{
  return  array[randomdi(0,array.length)];
}

function mapRange(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function   fxAddPalette(_name,_colors)
{
    fxColorPalette.push({
        name:_name,
        color:_colors,
        get()
        {
            return randomFrom(this.color)
        }
    });
};

function    fxRandomPalette()
{
    return randomFrom(fxColorPalette); 
}

function    fxGetPalete(_i)
{
    return  fxColorPalette[_i];
}


function  drawShadow(ctx,am,col,offx,offy)
{
  ctx.shadowBlur = am;
  ctx.shadowColor = col;
  ctx.shadowOffsetX = offx;
  ctx.shadowOffsetY = offy;
}

function clearShadow(ctx)
{
  ctx.shadowBlur = 0.0;
}
