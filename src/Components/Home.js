import React,{Component} from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class Home extends Component{
    constructor(){
        super()
        this.state={
            data:"",
            isLoading:true,
            url:"",
            science:"",
            world:"",
            isWorld:true,
            art:"",
            isArt:true,
            popular:"",
            isPopular:true,
            results:"",
            isResults:true,
            show:true,
            enable:false,
            query:'',
            message:'',
            single:true,
            preview:true,
            previewData:"",
            isPreview:true,
            rePreview:true,
            isRepreview:true
        }
    }
    toggleEnable = () => this.setState({enable:true});
    toggleHide = () => this.setState({show:false});
    togglePreview = () => this.setState({preview:false})
    toggleRePreview = () => this.setState({rePreview:false})
        componentWillMount=()=>{
            console.log("Inside Component will mount");
           
            axios.get('https://api.nytimes.com/svc/topstories/v2/home.json',{params:{
            'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
    }}).then((response)=>{
        console.log("output",response.data.results);
       /* response.data.results.map(article=>{

            console.log(article.title);
            console.log(article.abstract);
            //console.log(article.media[0]["media-metadata"][2].url);
            
        });*/
        this.setState({
            data:response.data.results,
            isLoading:false
        })
        console.log(this.state.data);
    });
    axios.get('https://api.nytimes.com/svc/topstories/v2/world.json',{params:{
        'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
}}).then((response)=>{
    console.log("output",response.data.results);
   /* response.data.results.map(article=>{

        console.log(article.title);
        console.log(article.abstract);
        //console.log(article.media[0]["media-metadata"][2].url);
        
    });*/
    this.setState({
        world:response.data.results,
        isWorld:false
    })
    console.log(this.state.data);
});
axios.get('https://api.nytimes.com/svc/topstories/v2/arts.json',{params:{
        'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
}}).then((response)=>{
    console.log("output",response.data.results);
   /* response.data.results.map(article=>{

        console.log(article.title);
        console.log(article.abstract);
        //console.log(article.media[0]["media-metadata"][2].url);
        
    });*/
    this.setState({
        art:response.data.results,
        isArt:false
    })
    console.log(this.state.data);
});
axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json',{params:{
        'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
}}).then((response)=>{
    console.log("output",response.data.results);
   /* response.data.results.map(article=>{

        console.log(article.title);
        console.log(article.abstract);
        //console.log(article.media[0]["media-metadata"][2].url);
        
    });*/
    this.setState({
        popular:response.data.results,
        isPopular:false
    })
    console.log(this.state.data);
});
axios.get('https://api.nytimes.com/svc/topstories/v2/world.json',{params:{
            'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
    }}).then((response)=>{
        console.log("output",response.data.results);
       /* response.data.results.map(article=>{

            console.log(article.title);
            console.log(article.abstract);
            //console.log(article.media[0]["media-metadata"][2].url);
            
        });*/
        this.setState({
            world:response.data.results,
            isWorld:false
        })
        console.log(this.state.data);
    });
    }
    handleChange=(e)=>{
        let target = e.target;
        let value = target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        })
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state.query);
      axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+this.state.query,{params:{
                'api-key': 'IUedNdYGHnbflv4kJzg8MNhcBHn4ubnS'
        }}).then((response)=>{
            console.log("searchValue",response.data);
            console.log("status:",response.data.status);
            console.log("docs:",response.data.response.docs);
            if((response.data.status==="OK") && (response.data.response.docs.length !== 0)){
              this.setState({
                results:response.data.response.docs,
                isResults:false
              })
              this.toggleHide();
              this.toggleEnable();
              //localStorage.setItem("searchResult",JSON.stringify(response.data.response.docs));
              //this.props.history.push('/search');
             // window.location.href='/search';
             // history.push('/search');
            }
            else{
              this.setState({
                message:"Search not found!",
                results:"",
                isResults:true,
                single:false
              })
              this.toggleHide();
              this.toggleEnable();
            }
          
        })
        console.log("results:",this.state.results);   
        
        }
        handlePreview=(e)=>{
            console.log("selected article:",JSON.parse(e.target.name));
            this.toggleHide();
            this.togglePreview();
            this.toggleRePreview();
            this.setState({
                previewData:JSON.parse(e.target.name),
                isPreview:false,
                preview:true
            })
        }
        handleRePreview=(e)=>{
            console.log("selected article:",JSON.parse(e.target.name));
            this.toggleHide();
            this.togglePreview();
            this.toggleRePreview();
            this.setState({
                previewData:JSON.parse(e.target.name),
                isRePreview:false,
                rePreview:true
            })
        }
        handleStates=()=>{
            this.setState({
                show:true,
                preview:true,
                enable:false,
                isPreview:true,
                rePreview:true,
                isRePreview:true
            })
        }
        handleReturn=()=>{
            this.setState({
                show:true,
                preview:false,
                isPreview:false,
                enable:false,
                rePreview:false,
                isRepreview:false
            })
        }
    render(){
        const{data,isLoading,isWorld,world,art,isArt,popular,isPopular,results,isResults,previewData,isPreview,isRePreview}=this.state;
        return(
            <> 
            <div className="col-xl-12 col-lg-12 col-md-6 m-3 search">
             {this.state.show?<Form inline onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search" className="mr-sm-2" name="query" value={this.state.query} onChange={this.handleChange} required/>
                    <Button variant="outline-light" type="submit">Search</Button>
                </Form>:null}
            </div>    
           {this.state.show?<div className="mainSection container-fluid p-0">
            <div className="col-xl-3 col-lg-3 col-md-12 leftSection">
            <h4 className="text-white"><b>Most Popular</b></h4>
            <hr className="singleLine"></hr>  
               {!isPopular?(popular.map(article=>{
                   return(
                <div className="col-xl-12 col-md-12 p-3 mb-1 homeContents">
                  <h5><b><a href={"#"+article.title} onClick={this.handleRePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5> 
                  <p>{article.abstract}</p>
               </div>
                   )
               })):
               <div></div>
               }
            </div>
               <div className="topStories col-xl-6 col-lg-6 col-md-12">
               <h4 className="text-white"><b>Top Stories</b></h4>
               <hr className="singleLine"></hr>  
               {!isLoading?(data.map(article=>{
                   if(data.indexOf(article)===0){
                    return(
                        <div className="col-xl-12 col-lg-12 col-md-12 p-3 mr-1 mb-1 FirstContent"> 
                          <div className="col-xl-12 col-lg-12 col-md-12">
                          <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                          <p>{article.abstract}</p>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                          <img src={article.multimedia[0].url} alt=""/>
                          </div> 
                       </div>
                           )
                   }
                   if(data.indexOf(article)<29){
                   return(
                <div className="col-xl-6 p-3 mb-1 topContents">
                  <div className="col-xl-3">
                  <img src={article.multimedia[1].url} alt=""/>
                  </div>  
                  <div className="col-xl-9">
                  <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                  
                  <p>{article.abstract}</p>
                  </div>
               </div>
                   )
                   }
                   else{
                       return null;
                   }
               })):
               <div></div>
               }
               </div>              
               <div className="col-xl-3 col-lg-3 col-md-12 rightSection">
               <h4 className="text-white"><b>World</b></h4>
               <hr className="singleLine"></hr>  
               {!isWorld?(world.map(article=>{
                   if(world.indexOf(article)<=4){
                   return(
                <div className="col-xl-12 p-3 mb-1 homeContents">
                  <div className="col-xl-3">
                  <img src={article.multimedia[1].url} alt=""/>
                  </div>  
                  <div className="col-xl-9 col-lg-12">
                  <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                  
                  <p>{article.abstract}</p>
                  </div>
               </div>
                   )
                   }
                   else{
                       return null;
                   }
               })):
               <div></div>
               }
               <h4 className="text-white"><b>science & Technology</b></h4>
               <hr className="singleLine"></hr>  
               {!isWorld?(world.map(article=>{
                   if(world.indexOf(article)<=4){
                   return(
                <div className="col-xl-12 p-3 mb-1 homeContents">
                  <div className="col-md-3">
                  <img src={article.multimedia[1].url} alt=""/>
                  </div>  
                  <div className="col-xl-9">
                  <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                  
                  <p>{article.abstract}</p>
                  </div>
               </div>
                   )
                   }
                   else{
                       return null;
                   }
               })):
               <div></div>
               }
               <h4 className="text-white"><b>Art</b></h4>
               <hr className="singleLine"></hr>  
               {!isArt?(art.map(article=>{
                   if(art.indexOf(article)<=4){
                   return(
                <div className="col-xl-12 col-lg-12 p-3 mb-1 homeContents">
                  <div className="col-xl-3">
                  <img src={article.multimedia[1].url} alt=""/>
                  </div>  
                  <div className="col-xl-9">
                  <h5><b><a href={"#"+article.title} onClick={this.handlePreview} name={JSON.stringify(article)}>{article.title}</a></b></h5>
                  
                  <p>{article.abstract}</p>
                  </div>
               </div>
                   )
                   }
                   else{
                       return null;
                   }
               })):
               <div></div>
               }
               
               </div>

            </div>:null}
            {this.state.enable?<div className="mainSection container-fluid">  
               <div className="topStories col-xl-6">
               <span onClick={this.handleReturn} style={{color:"white",fontSize:"20px",textDecoration:"none"}}><b>&#8920; Back</b></span><hr/>   
               {this.state.single?<><h4 className="text-white">Related items</h4>
               <hr className="singleLine"></hr></>:<div className="col-xl-12 text-white text-center"><b><h2>{this.state.message}</h2></b></div> }
               {!isResults?(results.map(article=>{
                   if(results.indexOf(article)<29){
                   return(
                <div className="col-xl-12 col-lg-12 p-3 mb-1 searchContents">
                  <div className="col-xl-12">
                  <h5><b><span>{article.headline.main}</span></b></h5>
                  <p>{article.abstract}</p>
                  <p>{article.lead_paragraph}</p>
                  </div>
               </div>
                   )
                   }
                   else{
                       return null;
                   }
               })):
                <div></div>
               }
               </div>              
               

            </div >:null}
            {this.state.preview?<div className="mainSection container-fluid">
               <div className="topStories col-xl-6"> 
                 
               {!isPreview?(
                  <>
                   <span onClick={this.handleStates} style={{color:"white",fontSize:"20px",textDecoration:"none"}}><b>&#8920; Back</b></span>  
                  <div className="col-xl-12 col-lg-12 p-3 mb-1 text-white previewContent">
                       <h3 className="text-white"><b>{previewData.title}</b></h3>
                    <hr className="singleLine"></hr>
                  <h5><b><span>-------{previewData.byline}</span><br/>
                  <span>Published on : {previewData.published_date}</span></b></h5>
                  {(previewData.multimedia[0]!==0)?<img className="previewImg" src={previewData.multimedia[0].url} alt=""/>:null}
                  <p>{previewData.abstract}</p>

               </div>
               </>
                   ):
                <div></div>
               }
               </div>              
            </div>:null}
            {this.state.rePreview?<div className="mainSection container-fluid">
               <div className="topStories col-xl-6"> 
                 
               {!isRePreview?(
                  <>
                   <span onClick={this.handleStates} style={{color:"white",fontSize:"20px",textDecoration:"none"}}><b>&#8920; Back</b></span>  
                  <div className="col-xl-12 col-lg-12 p-3 mb-1 text-white previewContent">
                       <h3 className="text-white"><b>{previewData.title}</b></h3>
                    <hr className="singleLine"></hr>
                  <h5><b><span>-------{previewData.byline}</span><br/>
                  <span>Published on : {previewData.published_date}</span></b></h5>
                  <p>{previewData.abstract}</p>

               </div>
               </>
                   ):
                <div></div>
               }
               </div>              
            </div>:null}
            </>
        )
}
}

export default Home;