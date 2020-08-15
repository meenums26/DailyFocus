import React,{Component} from 'react'
import axios from 'axios'
class Science extends Component{
    constructor(){
        super()
        this.state={
            data:"",
            isLoading:true,
            url:"",
            show:true,
            preview:true,
            previewData:"",
            isPreview:true
        }
    }
    toggleHide = () => this.setState({show:false});
    togglePreview = () => this.setState({preview:false})
        componentDidMount(){
            console.log("Inside Component will mount");
            axios.get('https://api.nytimes.com/svc/topstories/v2/science.json',{params:{
            'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
    }}).then((response)=>{
        console.log("output",response.data.results);
       /* response.data.results.map(article=>{

            console.log(article.title);
            console.log(article.abstract);
            //console.log(article.media[0]["media-metadata"][2].url);
            
        });*/
        this.setState({
            data:(response.data.results).sort(function(a,b){return a-b}),
            isLoading:false
        })
        console.log(this.state.data);
    });
        
    }
    handlePreview=(e)=>{
        console.log("selected article:",JSON.parse(e.target.name));
        this.toggleHide();
        this.togglePreview();
        this.setState({
            previewData:JSON.parse(e.target.name),
            isPreview:false,
            preview:true
        })
    }
    handleStates=()=>{
        this.setState({
            show:true,
            preview:true
        })
    }
    render(){
        const{data,isLoading,preview,previewData,isPreview}=this.state;
        return(
            <>
             <h4 className="m-2 text-light"><b>Science & Technology</b></h4>
             <hr className="singleLine"></hr>  
             {this.state.show?<div className="mainSection container-fluid">
               <div className="mostViews col-xl-12 col-lg-12">
               {!isLoading?(data.map(article=>{
                   if(data.indexOf(article)=== 0){
                    return(
                        <div className="col-xl-6 col-lg-6 p-2 mr-2 mb-3 FirstContent">  
                          <div className="col-xl-12">
                          <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                          <p>{article.abstract}</p>
                          </div>
                          <div className="col-xl-12">
                          <img className="p-2" src={article.multimedia[0].url} alt=""/>
                          </div>
                       </div>
                           )
                   }
                   if(data.indexOf(article)=== 1){
                    return(
                        <div className="col-xl-2 col-lg-2 p-2 mr-2 mb-3 secondContent">
                          <div className="col-xl-12">
                          <img className="p-2 mt-3" src={article.multimedia[0].url} alt=""/>
                          </div>  
                          <div className="col-xl-12">
                          <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                          <p>{article.abstract}</p>
                          </div>
                       </div>
                           ) 
                   }
                   if(data.indexOf(article)=== 2){
                    return(
                        <div className="col-xl-2 col-lg-2 p-2 mr-1 mb-3 thirdContent">
                          <div className="col-xl-12">
                          <img className="p-2 mt-3"src={article.multimedia[0].url} alt=""/>
                          </div>  
                          <div className="col-xl-12">
                          <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                          <p>{article.abstract}</p>
                          </div>
                       </div>
                           ) 
                   }
                   return(
                    <div className="p-2 mb-2 contents">
                    <div className="col-xl-3">
                    <img src={article.multimedia[1].url} alt=""/>
                    </div>  
                    <div className="col-xl-9">
                    <h5><b><a a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                    
                    <p>{article.abstract}</p>
                    </div>
                    </div>
                   )
               })):
               <div></div>
               }
               </div>
            </div >:null}
            {preview?<div className="mainSection container-fluid">
                
               <div className="topStories col-xl-6">
               {!isPreview?(
                    <>
                    <span onClick={this.handleStates} style={{color:"white",fontSize:"20px",textDecoration:"none"}}><b>&#8920; Back</b></span> 
                  <div className="col-xl-12 col-lg-12 p-3 mb-1 text-white previewContent">
                       <h3 className="text-white"><b>{previewData.title}</b></h3>
                    <hr className="singleLine"></hr>
                  <h5><b><span>-------{previewData.byline}</span><br/>
                  <span>Published on : {previewData.published_date}</span></b></h5>
                  {(previewData.multimedia[0])?<img className="previewImg" src={previewData.multimedia[0].url} alt=""/>:null}
                  <p>{previewData.abstract}</p>

               </div>
               </>
                   ):
                <div></div>
               }
               </div>              
               

            </div >:null}
            </>
        )
}
}

export default Science
/*
 {!isLoading?(data.map(article=>{
                   return(
                <div className="col-md-12 p-2 mr-1 mb-1 contents">

                  <div className="col-md-3">
                  <img src={article.multimedia[0].url} alt=""/>
                  </div>  
                  <div className="col-md-9">
                  <h5><b><a href={article.url}>{article.title}</a></b></h5>
                  
                  <p>{article.abstract}</p>
                  </div>
               </div>
                   )
               })):
               <div></div>
               }*/