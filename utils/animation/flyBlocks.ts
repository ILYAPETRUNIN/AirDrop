import { gsap } from "gsap";
import randomInt from '../randomize'

interface Coard{
  x:number, 
  y:number;
  z:number;
  rotate:number;
}

interface BlockConfig extends Coard{
    id:string
    src:string;
}


class Block implements BlockConfig{
  id:string;
  src:string;
  x:number;
  y:number;
  z:number;
  rotate:number;
  constructor(id:string,src:string){
    this.id=id
    this.src=src
    this.x=1;
    this.y=2;
    this.z=3;
    this.rotate=90
  }
}

interface FlyBlocksConfig{
  id:string;
  maxNumBlock:number;
  listSrc:string[]
}


interface RenderElement{
  el:HTMLElement,
  coard:DOMRect
}



export default class FlyBlocks implements FlyBlocksConfig{
    id:string;
    maxNumBlock:number;
    private renderElement:RenderElement;
    listSrc:string[]=[];

    constructor(args:FlyBlocksConfig){
      this.id=args.id
      this.maxNumBlock=args.maxNumBlock
      this.listSrc=args.listSrc
      this.renderElement=this.getElemRender(this.id)
      
      this.init()
    }

    private getElemRender(id:string):RenderElement{
      let el=document.getElementById(id) as HTMLElement;
      let size=el.getBoundingClientRect();
      return {
          el,
          coard:size
      }   
    }

    private createBlock(src:string,render:HTMLElement):HTMLElement{
      let block=document.createElement('img');
      block.src=src;
      this.styleBlock(block);
      render.appendChild(block)
      return block
    }

    private pushBlock(){
      let block=this.createBlock(this.listSrc[randomInt(0,1)],this.renderElement.el)
      this.addAnimate(block)  
    }

    private deleteBlock(block:HTMLElement){
      block.remove();
      this.pushBlock()
    }

    private addAnimate(block:HTMLElement){
      const paramStart={
        x:-block.clientWidth*randomInt(1,2),
        y:randomInt(0,this.renderElement.coard.bottom),
        scale:Math.random()*1.1
      }

      const paramsStop={
        duration: randomInt(40,60), 
        rotation: randomInt(20,360), 
        x:this.renderElement.coard.right,
        ease: "none"
      }

      let tl=gsap.timeline({
        onComplete: this.deleteBlock.bind(this),
        onCompleteParams:[block]
      });

      tl.set(block,{zIndex:Math.trunc(paramStart.scale*10)})

      
      tl.fromTo(block, {...paramStart},{...paramsStop});
    }

    private styleBlock(block:HTMLElement){
      block.style.position='absolute'
      block.style.pointerEvents='none'
    }

    private init():void{
      for(let i=0;i<this.maxNumBlock;i++){
        this.pushBlock()
      }  
    }


}


