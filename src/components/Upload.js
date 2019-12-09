// import React, { Component } from 'react'
// import Dropzone from './Dropzone'

// class Upload extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           files: [],
//           uploading: false,
//           uploadProgress: {},
//           successfullUploaded: false
//         };
    
//         this.onFilesAdded = this.onFilesAdded.bind(this);
//         this.uploadFiles = this.uploadFiles.bind(this);
//         //this.sendRequest = this.sendRequest.bind(this);
//         this.renderActions = this.renderActions.bind(this);
//     }

//     async uploadFiles() {
//         this.setState({ uploadProgress: {}, uploading: true });
//         const promises = [];
//         this.state.files.forEach(file => {
//           //promises.push(this.sendRequest(file));
//         });
//         try {
//           await Promise.all(promises);
      
//           this.setState({ successfullUploaded: true, uploading: false });
//         } catch (e) {
//           // Not Production ready! Do some error handling here instead...
//           this.setState({ successfullUploaded: true, uploading: false });
//         }
//     }

//     sendRequest(file) {
//         return new Promise((resolve, reject) => {
//           const req = new XMLHttpRequest();
      
//           const formData = new FormData();
//           formData.append("file", file, file.name);
      
//           req.open("POST", "http://localhost:8000/upload");
//           req.send(formData);
//         });
//     }
    
//     onFilesAdded(files) {
//         this.setState(prevState => ({
//             files: prevState.files.concat(files)
//         }));
//     }
//     renderProgress(file) {
//         const uploadProgress = this.state.uploadProgress[file.name];
//         if (this.state.uploading || this.state.successfullUploaded) {
//           return (
//             <div className="ProgressWrapper">
//               <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
//               <img
//                 className="CheckIcon"
//                 alt="done"
//                 src="baseline-check_circle_outline-24px.svg"
//                 style={{
//                   opacity:
//                     uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
//                 }}
//               />
//             </div>
//           );
//         }
//     }
//     renderActions() {
//         if (this.state.successfullUploaded) {
//           return (
//             <button
//               onClick={() =>
//                 this.setState({ files: [], successfullUploaded: false })
//               }
//             >
//               Clear
//             </button>
//           );
//         } else {
//           return (
//             <button
//               disabled={this.state.files.length < 0 || this.state.uploading}
//               onClick={this.uploadFiles}
//             >
//               Upload
//             </button>
//           );
//         }
//     }

//     render() {
//         return (
//           <div className="Upload">
//             <span className="Title">Upload Files</span>
//             <div className="Content">
//               <div>
//                 <Dropzone
//                   onFilesAdded={this.onFilesAdded}
//                   disabled={this.state.uploading || this.state.successfullUploaded}
//                 />
//               </div>
//               <div className="Files">
//                 // Add this:
//                 {this.state.files.map(file => {
//                   return (
//                     <div key={file.name} className="Row">
//                       <span className="Filename">{file.name}</span>
//                       <div className="Actions">
//                       {this.renderProgress(file)}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="Actions">
    
//             </div>
//           </div>
//         );
//     }
// }

// // .Upload {
// //     display: flex;
// //     flex-direction: column;
// //     flex: 1;
// //     align-items: flex-start;
// //     text-align: left;
// //     overflow: hidden;
// //   }
  
// //   .Content {
// //     display: flex;
// //     flex-direction: row;
// //     padding-top: 16px;
// //     box-sizing: border-box;
// //     width: 100%;
// //   }
  
// //   .Files {
// //     margin-left: 32px;
// //     align-items: flex-start;
// //     justify-items: flex-start;
// //     flex: 1;
// //     overflow-y: auto;
// //   }
  
// //   .Actions {
// //     display: flex;
// //     flex: 1;
// //     width: 100%;
// //     align-items: flex-end;
// //     flex-direction: column;
// //     margin-top: 32px;
// //   }
  
// //   .Title {
// //     margin-bottom: 32px;
// //     color: #555;
// //   }