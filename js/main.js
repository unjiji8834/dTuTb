        var app;
        function initPixi() {
          app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
          document.body.appendChild(app.view);
          var image = new PIXI.Sprite.from("images/mainIMG.png");
          image.width = window.innerWidth;
          image.height = window.innerHeight;
          app.stage.addChild(image);
          displacementSprite = new PIXI.Sprite.from("images/cloud.jpg");
          displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
          displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
          app.stage.addChild(displacementSprite);
          app.stage.filters = [displacementFilter];
          app.renderer.view.style.transform = 'scale(1.02) translate(-50%,-50%)';
          displacementSprite.scale.x = 5;/*4*/
          displacementSprite.scale.y = 5;/*4*/
          animate();
        }
        function animate() {
          displacementSprite.x += 7;/*10*/
          displacementSprite.y += 1;/*4*/
          requestAnimationFrame(animate);
        }
        initPixi();