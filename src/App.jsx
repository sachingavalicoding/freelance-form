import { useState } from 'react'
import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
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
    actOb: '',
    sections: {
      plant: [
        {
          point: '1. Energy sources controlled', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '2. Plant well maintained', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '3. Leaks/spills contained', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '4. Protection from hazards in place', checkbox1: false, checkbox2: false, comments: '' },
        { point: '5. Access / egress clear', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '6. Layout and work locations safe', checkbox1: false, checkbox2: false, comments: ''
        },
        {
          point: '7.Housekeeping standard high', checkbox1: false, checkbox2: false, comments: ''
        },
      ],
      people: [
        {
          point: '1. Work location protected', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '2. Work positions safe', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '3. People competent', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '4. Hazards understood', checkbox1: false, checkbox2: false, comments: '' },
        { point: '5. PPE appropriate', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '6. Risk to others avoided', checkbox1: false, checkbox2: false, comments: ''
        },
        {
          point: '7.Distractions absent', checkbox1: false, checkbox2: false, comments: ''
        },
      ],
      process: [
        {
          point: '1. Procedures valid', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '2. Correct procedures used', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '3. Control of Work standard applied', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '4. Control of Work requirements understood', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '5. Risk documented ', checkbox1: false, checkbox2: false, comments: ''
        },
        {
          point: '6. JRA/JSA participation', checkbox1: false, checkbox2: false, comments: ''
        },
        {
          point: '7. Work well organised, systematic', checkbox1: false, checkbox2: false, comments: ''
        },
        {
          point: '8. Communication effective ', checkbox1: false, checkbox2: false, comments: ''
        },
        {
          point: '9. Change managed safely , systematic', checkbox1: false, checkbox2: false, comments: ''
        },
      ],
      performance: [
        {
          point: '1. Work pressure doesn’t compromise safety', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '2. Safety priority messaged by leadership', checkbox1: false, checkbox2: false, comments: '' },
        {
          point: '3. Supervision appropriate', checkbox1: false, checkbox2: false, comments: ''
        },
        { point: '4. Pace appropriate/safe', checkbox1: false, checkbox2: false, comments: '' },
        { point: '5. Safety performance recognized', checkbox1: false, checkbox2: false, comments: '' },

      ],

    },
  })

  const handleChange = (e) => {
    const { name, value, type, dataset } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        sections: {
          ...prevData.sections,
          [dataset.section]: prevData.sections[dataset.section].map((point, index) =>
            index === parseInt(dataset.index, 10)
              ? { ...point, [name]: !point[name] }
              : point
          ),
        },
      }));
    } else if (name === 'comments') {
      const { section, index } = dataset;
      setFormData((prevData) => ({
        ...prevData,
        sections: {
          ...prevData.sections,
          [section]: prevData.sections[section].map((point, i) =>
            i === parseInt(index, 10) ? { ...point, comments: value } : point
          ),
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleSubmit = e => {
    e.preventDefault()
  }
  const handleSubmitForm = e => {
    e.preventDefault()
  }

  const handleDownload = () => {

    const jsonData = JSON.stringify(formData);


    const blob = new Blob([jsonData], { type: 'application/json' });


    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'formData.json';

    document.body.appendChild(a);
    a.click();


    document.body.removeChild(a);
  };

  const handlePrint = () => {
    window.print();
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

            {Object.keys(formData.sections).map((sectionName) => (
              <section key={sectionName} className="section">
                <h2 className='heading'>{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</h2>
                {formData.sections[sectionName].map((point, index) => (
                  <div key={index} className="plant-point">
                    <div className="section-heading">
                      <label>{point.point}</label>
                      <div className="checkbox">
                        <div>
                          <input
                            type="checkbox"
                            name={`checkbox1`}
                            checked={point.checkbox1}
                            onChange={handleChange}
                            data-section={sectionName}
                            data-index={index}
                          />
                          <span>Good Practice </span>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name={`checkbox2`}
                            checked={point.checkbox2}
                            onChange={handleChange}
                            data-section={sectionName}
                            data-index={index}
                          />
                          <span>Deviation</span>
                        </div>
                      </div>
                    </div>
                    <label htmlFor={`comments-${sectionName}-${index}`}>Comments:</label>
                    <textarea
                      id={`comments-${sectionName}-${index}`}
                      name="comments"
                      value={point.comments}
                      onChange={handleChange}
                      data-section={sectionName}
                      data-index={index}
                    ></textarea>
                  </div>
                ))}
              </section>
            ))}




            <button type='submit'>Submit</button>

          </form>
        </div>
      </div>
      <div className='preview'>
        <form onSubmit={handleSubmitForm} >
          <div className='form-main__heading'>
            <h1>SOC </h1>
            <h3> Safety Observations and Conversations </h3>
          </div>
          <div className='formData__container'>
            <div className="formData__top">
              <div className="form-row">
                <p> <span> Observation Name : </span> {formData.obName} </p>
                <p> <span> Department :</span> {formData.deName} </p>
              </div>
              <div className="form-row">
                <p> <span> Project No : </span> {formData.projectNo} </p>
                <p> <span> Inspection Sheets :</span> {formData.inSheet} </p>
              </div>
              <div className="form-row">
                <p> <span> Date Occurred : </span>  {formData.dateOcc} </p>
                <p> <span> Duration:  :</span> {formData.duration} </p>
              </div>
              <div className="form-full-row">
                <p> <span> Location : </span>  {formData.location} </p>
              </div>
              <div className="form-full-row">
                <p> <span>Activity Observed : </span>  {formData.actOb} </p>
              </div>
              <div className="form-full-row">
                <p> <span>Key Safety Conclusions/Comments/Agreements : </span> {formData.keySefety} </p>
              </div>
            </div>
            <div className="formData__bottom">
              <div>
                <table>
                  <thead>
                    <tr className='table__heading'>
                      <th>Please enter Safety Observation
                      </th>
                      <th>Good
                        Practice</th>
                      <th>
                        Deviation</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(formData.sections).map((sectionName) => (
                      <React.Fragment key={sectionName}>
                        <tr>
                          <th colSpan="4">{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</th>
                        </tr>
                        {formData.sections[sectionName].map((point, index) => (
                          <tr key={index}>
                            <td>{point.point}</td>
                            <td>{point.checkbox1 ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</td>
                            <td>{point.checkbox2 ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</td>
                            <td>{point.comments}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='btns__container'>
            <button type="button" onClick={handleDownload}>
              Download
            </button>
            <button type="button" onClick={handlePrint}>
              Print
            </button>
            <button type="submit" onClick={handleSubmitForm}>
              Submit
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default App
