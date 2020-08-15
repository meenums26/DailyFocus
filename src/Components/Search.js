import React,{Component} from 'react'
class Search extends Component{
    constructor(){
        super()
        this.state={
            isLoading:true,
        }
    }
        componentDidMount=()=>{
       this.setState={
           data:JSON.parse(localStorage.getItem("searchResult"))
       }
      //console.log("recieved data:",JSON.parse(localStorage.getItem("searchResult")));
        }
    render(){
        const{data,isLoading}=this.state;
        return(
            <>
            <div className="mainSection container-fluid">
               <div className="topStories col-md-6">
               <h4 className="text-white">Related items</h4>
               <hr className="singleLine"></hr>  
               {!isLoading?(data.map(article=>{
                   if(data.indexOf(article)<29){
                   return(
                <div className="col-md-6 p-3 mb-1 contents">
                  <div className="col-md-3">
                  <h5><b><a href={article.web_url}>{article.headline.main}</a></b></h5>
                  </div>  
                  <div className="col-md-9">
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
               

            </div >
            </>
        )
}
}

export default Search;