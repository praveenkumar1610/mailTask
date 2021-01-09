import React,{useEffect,useState} from 'react';
import './Repo.css'

export default function Repo(props) {
    const [repoArray,setRepoArray]=useState([]);
    const [startIndex,setStartindex]=useState(0);
    const [endIndex,setEndIndex]=useState(10);
    const [page,setPage]=useState(1);
    const totalNumberRepo=repoArray.length;
    const viewLimit=10;
    const totalPages=Math.ceil(totalNumberRepo/viewLimit)
    

    useEffect(()=>{
        fetch(`https://api.github.com/users/${props.user}/repos`).then(resp=>resp.json()).then(data=>setRepoArray(data))
    },[props.user])

    const ListView=(props)=>{
      return(
          props.data.slice(startIndex,endIndex).map(repo=>{
              return (
                  <div className="nameLayout">
                    <h4>{repo.name}</h4>
                  </div>
              )
          })
      )
    }

    const handleNextPage=()=>{
        setPage(page+1)
        setStartindex(endIndex)
        setEndIndex(endIndex+10)
    }

    const handlePrevPage=()=>{
        setPage(page+1)
        setStartindex(startIndex-10)
        setEndIndex(endIndex-10)
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
                {page===1?<button disabled>Previous</button>:<button onClick={handlePrevPage}>Previous</button>}
                {page===totalPages?<button disabled>Next</button>:<button onClick={handleNextPage}>Next</button>}
            </div>
            ):(
                <div>
                </div>
            )
            }
        </div>
    )
}
