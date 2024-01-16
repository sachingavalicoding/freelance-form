import { useState } from 'react'
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    obName: '',
    deName: '',
    projectNo: '',
    inSheet: '',
    dateOcc: '',
    duration: '',
    location: '',
    keySefety: '',
    actOb: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <div className='app__container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div>
                <label htmlFor='obName'>Observer Name </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Department </label>
                <input
                  type='text'
                  name='deName'
                  value={formData.deName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div>
                <label>Project No </label>
                <input
                  type='number'
                  name='projectNo'
                  value={formData.projectNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Inspection Sheets </label>
                <input
                  type='text'
                  name='inSheet'
                  value={formData.inSheet}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div>
                <label>Date Occurred </label>
                <input
                  type='date'
                  name='dateOcc'
                  value={formData.dateOcc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Duration </label>
                <input
                  type='text'
                  name='duration'
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <label>Location</label>
            <textarea
              name='location'
              value={formData.location}
              onChange={handleChange}
              required
            ></textarea>
            <label>Activity Observed</label>
            <textarea
              name='actOb'
              value={formData.actOb}
              onChange={handleChange}
              required
            ></textarea>
            <label>Key Safety Conclusions/Comments/Agreements</label>
            <textarea
              name='keySefety'
              value={formData.keySefety}
              onChange={handleChange}
              required
            ></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>

      <div></div>
    </>
  )
}

export default App
