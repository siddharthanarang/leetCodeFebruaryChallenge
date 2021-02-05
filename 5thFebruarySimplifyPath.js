// Simplify Path
// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style
// file system, convert it to the simplified canonical path.
//
//   In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to
// the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For
// this problem, any other format of periods such as '...' are treated as file/directory names.
//
//   The canonical path should have the following format:
//
//   The path starts with a single slash '/'.
//   Any two directories are separated by a single slash '/'.
//   The path does not end with a trailing '/'.
//   The path only contains the directories on the path from the root directory to the target file or directory (i.e.,
// no period '.' or double period '..')
// Return the simplified canonical path.
//

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.
//
//   Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
//
// Input: path = "/a/./b/../../c/"
// Output: "/c"

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path += '/';
  let j;
  for(let i=0; i<path.length; i++){
    if(path[i] === '/' && path[i+1] === '.' && path[i+2] === '.' && path[i+3] === '/'){
      j = i-1;
      while(path[j] != '/' && j >= 0){
        j--;
      }
      if(j < 0) j=0;
      path = path.substring(0,j+1) + path.substring(i+4);
      i = j-1;
    }
     else if(path[i] === '/' && path[i+1] === '.' && path[i+2] === '/'){
      path = path.substring(0,i+1) + path.substring(i+3);
      i = i-1;
     }
     else if(path[i] === '/' && path[i+1] === '/' ){
      path = path.substring(0,i+1) + path.substring(i+2);
       i = i-1;
    }
    
  }
  if(path.length > 1 && path[path.length -1] === '/'){
    path = path.slice(0,path.length-1);
  }
  return path;
};

console.log(`Simplify Path is `,simplifyPath("/..."));
