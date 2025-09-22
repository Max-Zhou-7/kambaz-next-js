export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br/><br/>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br/>
      <table><br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value= "ASSIGNMENTS">ASSIGNMENTS</option>
              <option value= "QUIZ">QUIZ</option>
               <option value= "PROJECT">PROJECT</option>
              </select>
          </td>
          
        </tr><br/>
                <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value= "PERCENTAGE">Percentage</option>
              <option value= "DICIMAL">DICIMAL</option>
              </select>
          </td>
          
        </tr><br/>
      <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value= "ONLINE">Online</option>

              </select>
          </td>
          
        </tr><br/>
        <tr>
                  <td align="right" valign="top"></td>
      <label id="wd-checkboxes">Online Entry Options</label><br/>
      <input type="checkbox" name="check-genre" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox" name="check-genre" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website URL</label><br/>
          <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>
          <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotation</label><br/>
          <input type="checkbox" name="check-genre" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Uploads</label><br/>
</tr><br/>
      <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label><br/>
          </td>
          
<td>        <label htmlFor="wd-assign-to">Assign to</label><br/>
            <input id="wd-assign-to" defaultValue="Everyone" />
          </td>
          
        </tr><br/>
              <tr>
   <td align="right" valign="top"></td>
            <label htmlFor="wd-due-date">Due</label><br/>


<input type="date"
       defaultValue="2024-05-13"
       id="wd-due-date"/><br/>

          
          
        </tr><br/>
        <tr>
          <td align="right" valign="top"></td>
            <label htmlFor="wd-available-from">Avaliable from</label><br/>
          

<input type="date"
       defaultValue="2024-05-06"
       id="wd-available-from"/>

         
          
     
     
       <td align="left" valign="top" >
            <label htmlFor="wd-available-until">Until</label><br/>
      

<input type="date"
       defaultValue="2024-05-20"
       id="wd-available-until"/></td><br/>

        
          
        </tr>
        </table>
        <div style={{textAlign:"right"}}>
       
        <button id="wd-cancel">Cancel</button>
         <button id="wd-save">Save</button>

        </div >

    </div>
);}
