import React from 'react'
import './dashboard.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'


const Dashobard = () => {

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (text)=> {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      }).then((res)=> res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['userChats'] })
      navigate(`/dashboard/chats/${id}`)
    },
  })

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const text = e.target.text.value
    if(!text) return

    mutation.mutate(text);
  }
  return (
    <div className='dashboard'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>SAGE AI</h1>
        </div>
        <div className="options">
        <div className="option">
          <img src="/chat.png" alt="" />
          <span>Create A New Chat</span>
        </div>
        <div className="option">
          <img src="/image.png" alt="" />
          <span>Analyze Images</span>
        </div>
        <div className="option">
          <img src="/code.png" alt="" />
          <span>Help Me With My Code</span>
        </div>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder='Ask me anything'/>
          <button>
            <img src="/arrow.png" alt="" />
          </button>

        </form>
      </div>
    </div>
  )
}

export default Dashobard;