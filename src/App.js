import './App.css';
import { useEffect, useState } from 'react';

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function App() {

  const [display, setDisplay] = useState(false)
  const [form, setForm] = useState({
    huruf: '',
    baris: ''
  })
  const { huruf, baris } = form
  const rows = []
  const patternRangoli = (x, y) => {
    const n = parseInt(y);
    for (let i = n; i > 0; i--) {
      for (let j = 1; j <= i - 1; j++) {
        rows.push('&#8209&#8209')
      }
      for (let y = 1; y <= n - i + 1; y++) {
        rows.push(`${alphabet[x]}-`.toLocaleLowerCase())
      }

      for (let l = 1; l <= n - i; l++) {
        rows.push(`${alphabet[x]}-`.toLocaleLowerCase())
      }
      for (let j = 1; j <= i - 1; j++) {
        rows.push('&#8209&#8209')
      }
      rows.push('<br/>')
    }

    for (let i = 1; i < n; i++) {
      for (let j = 1; j <= i; j++) {
        rows.push('&#8209&#8209')
      }

      for (let y = 1; y <= n - i; y++) {
        rows.push(`${alphabet[x]}-`.toLocaleLowerCase())
      }

      for (let l = 1; l < n - i; l++) {
        rows.push(`${alphabet[x]}-`.toLocaleLowerCase())
      }
      for (let j = 1; j <= i - 1; j++) {
        rows.push('&#8209&#8209')
      }
      rows.push('<br/>')
    }
    return rows.join().replace(/w/gm, '-').replace(/,/gm, '')
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (huruf === '') {
      return alert('urutan huruf tidak boleh kosong !')
    }
    if (baris === '') {
      return alert('baris tidak boleh kosong !')
    }
    if (parseFloat(huruf) === 0) {
      return alert('urutan huruf tidak boleh kosong !')
    }
    if (parseFloat(baris) === 0) {
      return alert('baris tidak boleh kosong !')
    }
    setDisplay(true)
  }

  const handleBack = (e) => {
    setDisplay(false)
    setForm({
      huruf: '',
      baris: ''
    })
  }

  return (
    <>
      {
        display ?
          <div className='flex justify-center flex-col mt-48'>
            <div
              className="App"
              style={{ marginTop: '100px', fontWeight: 'bold' }}
              dangerouslySetInnerHTML={{ __html: patternRangoli(parseFloat(huruf) - 1, baris) }}>
            </div>
            <button onClick={handleBack} type='submit' className='btn btn-primary text-md mx-14 sm:mx-auto mt-14 md:mx-auto'>Back</button>
          </div>
          :
          <form className='flex justify-center flex-col mt-52'>
            <div className='grid grid-cols-2 gap-2 my-2 mx-auto'>
              <label className='underline my-auto' for="">input huruf ke :</label>
              <input type='number' className='w-32 rounded-md p-2' name='huruf' onChange={handleChange} />
            </div>
            <div className='grid grid-cols-2 gap-2 my-2 mx-auto'>
              <label className='underline my-auto' for="">input berapa baris :</label>
              <input type='number' className='w-32 rounded-md p-2' name='baris' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} type='submit' className='btn btn-primary text-md mx-14 sm:mx-auto md:mx-auto'>Submit</button>
          </form>
      }
    </>
  );
}

export default App;
