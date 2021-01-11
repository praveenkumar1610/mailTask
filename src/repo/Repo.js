import React,{useEffect,useState} from 'react';
import './Repo.css'

export default function Repo(props) {
    const [repoArray,setRepoArray]=useState([]);
    const [startIndex,setStartindex]=useState(0);
    const [endIndex,setEndIndex]=useState(10);
    const [page,setPage]=useState(1);
    const totalNumberRepo=repoArray.length;
    const totalPages=Math.ceil(totalNumberRepo/10)
    
    function pages(){ 
        const listPage=[]
        for(let i=1;i<=totalPages;i++){
            listPage.push(i)
        }
        return listPage;
    }

    useEffect(()=>{
        fetch(`https://api.github.com/users/${props.user}/repos`).then(resp=>resp.json()).then(data=>setRepoArray(data))
    },[props.user])

    const Pagination=(props)=>{
        const pageList=pages()

        const handlepge=(page)=>{
            setPage(page)
            setEndIndex(page*10)
            setStartindex(page*10-10)
        }

        return(
            <div>
                {pageList.map(item=>{
                    return (
                        <div className="pagination" key={item}>
                            <button onClick={()=>{handlepge(item);}}>{item}</button>
                        </div>
                    )
                })}
            </div>
        )
    }
    const ListView=(props)=>{
      return(
          props.data.slice(startIndex,endIndex).map(repo=>{
              return (
                  <div className="nameLayout">
                    <h4>
                        <a href={repo.html_url}>{repo.name}</a>
                    </h4>
                  </div>
              )
          })
      )
    }

    const handlePagination=(page)=>{
        setEndIndex(page*10)
        setStartindex(page*10-10)
        setPage(page)
    }

    return (
        <div>
            <div className="layout">
                {
                totalNumberRepo!==0?(
                <div>
                    <ListView data={repoArray}/>
                </div>
                ):(
                    <div>
                    </div>
                )
                }
            </div>
            {totalNumberRepo!==0?(
            <div className="buttonLayout">
                {page===1?<button disabled>Previous</button>:<button onClick={()=>{handlePagination(page-1)}}>Previous</button>}
                <Pagination totalPages={totalPages}/>
                {page===totalPages?<button disabled>Next</button>:<button onClick={()=>{handlePagination(page+1)}}>Next</button>}
            </div>
            ):(
                <div>
                </div>
            )
            }
        </div>
    )
}
