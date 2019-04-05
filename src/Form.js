import React, { useState, useEffect } from 'react';

function ControlledForm() {

    const [biodata, setBiodata] = useState(
        [
            { nama: "Ilham", alamat: "Maron", jk: "L", status: "Janda" },
            { nama: "Surya", alamat: "Norjo", jk: "L", status: "Duda" }
        ]
    )

    const [eBiodata, setEditBiodata] = useState()

    const addBiodata = data => {
        const newBiodata = [...biodata, data];
        setBiodata(newBiodata);
    }

    const editBiodata = index => {
        const edtBiodata = [...biodata];
        setEditBiodata(edtBiodata[index]);
    }

    return (
        <div>
            <h2>Controlled Forms</h2>
            {
                biodata.length > 0 ?
                    biodata.map((biodata, index) => (
                        <Display
                            key={index}
                            index={index}
                            biodata={biodata}
                            editBiodata={editBiodata}
                        />
                    )) : <p>No Biodata</p>
            }
            <Form addBiodata={addBiodata} eBiodata={eBiodata} />
        </div>
    )

}

function Display({ biodata, index, editBiodata }) {
    return (
        <div key={index}>
            <p>{biodata.nama + " | " + biodata.alamat + " | " + biodata.jk + " | " + biodata.status} <button onClick={() => editBiodata(index)}>Edit</button></p>
        </div>
    )
}

function Form({ addBiodata, eBiodata }) {

    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [jk, setJk] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        console.log(eBiodata)
    }, [eBiodata])

    const handleForm = e => {
        e.preventDefault();

        const data = { nama, alamat, jk, status };
        addBiodata(data);
        setNama("");
        setAlamat("");
        setJk("");
        setStatus("");
    }

    return (
        <form onSubmit={handleForm}>
            <input
                type="text"
                placeholder="Input Nama"
                value={nama}
                onChange={e => setNama(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Input Alamat"
                value={alamat}
                onChange={e => setAlamat(e.target.value)}
            />
            <br />
            <input
                type="radio"
                value="L"
                name="jk"
                onChange={e => setJk(e.target.value)}
            /> L {" "}
            <input
                type="radio"
                value="P"
                name="jk"
                onChange={e => setJk(e.target.value)}
            /> P
            <br />
            <select onChange={e => setStatus(e.target.value)}>
                <option>-- Pilih Status --</option>
                <option value="janda">Janda</option>
                <option value="duda">Duda</option>
            </select>
            <br />
            <button>Simpan</button>
        </form>
    )
}

export default ControlledForm;