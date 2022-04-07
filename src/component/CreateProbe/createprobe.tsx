import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { addProbe } from "../../action/probelist";

const probedata = (newprobe, owner,harddisk,probetype,note) => {
    const probe = { 
      probeId: newprobe,
      owner: owner,
      harddisk: harddisk,
      probetype: probetype,
      note: note
    }
    return probe
  }

const CrearteProbe = () =>{
    const dispatch = useDispatch;
    const [newprobe, steNewprobe] = useState('');
    const [owner, setOwner] = useState('');
    const [harddisk, setHarddisk] = useState('');
    const [probetype, setProbetype] = useState('');
    const [note, setNote] = useState('');

    return(
        <div >
        <div>probe ID : <input value={newprobe} onChange={(e) => { steNewprobe(e.target.value) }} /></div>
        <div>客戶名稱: <input value={owner} onChange={(e) => { setOwner(e.target.value) }} /></div>
        <div>硬碟大小: {harddisk?harddisk:1}<select name="harddisk" defaultValue={1} onChange={(e) =>{ setHarddisk(e.target.value)}} ><option value={0}>8GB</option><option value={1}>16GB</option></select></div>
        <div>機型: {probetype?probetype:1}<select name="type" defaultValue={1} onChange={(e) =>{ setProbetype(e.target.value)}} ><option value={0}>P110</option><option value={1}>P220</option></select></div>
        <div>備註:<input value={note} onChange={(e) => { setNote(e.target.value) }} /> </div>
        <button type="button" onClick={() => { dispatch(addProbe(probedata(newprobe,owner,harddisk,probetype,note))) }}>新增Probe</button>
      </div>
    )
}

export default CrearteProbe