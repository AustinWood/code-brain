@notes.each do |note|
  json.set!(note.id) {json.partial!("api/notes/note", :note => note)}
end
