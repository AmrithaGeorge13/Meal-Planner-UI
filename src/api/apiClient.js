const API_BASE = 'http://localhost:8080/api'


export async function apiGet(endpoint){
    const res = await fetch(`${API_BASE}${endpoint}`);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if(!json.success) throw new Error(json.message || 'request failed');
    return json.data;
}


export async function apiPost(endpoint,body){
    const res = await fetch(`${API_BASE}${endpoint}`,{
        method : 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(body),
    });
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if(!json.success) throw new Error(json.message || 'request failed');
    return json.data;
}

export async function apiPut(endpoint,body){
    const  res =  await fetch(`${API_BASE}${endpoint}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
    })
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await  res.json();
    if(!json.success) throw new Error(json.message || 'request failed');
    return json.data;
}

export async function apiDelete(endpoint){
    const  res =  await fetch(`${API_BASE}${endpoint}`,{
        method:'DELETE'
    })
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await  res.json();
    if(!json.success) throw new Error(json.message || 'request failed');
    return json.data;
}