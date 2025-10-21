/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'About Student Inc',
    content: 'StudentInc is a simple website designed by a student to showcase the different buildings at MTU Kerry. It highlights each building with information and images in an easy-to-navigate layout.'
  });
};

module.exports = {
  about
};