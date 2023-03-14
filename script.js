const targets = document.getElementsByClassName("page-item");

document.addEventListener("mousemove", (e) => {
    for (let target in targets) {
        rotateElement(e, targets[target]);
    }
});

function rotateElement(event, element) {
    const x = event.clientX;
    const y = event.clientY;

    var rect = element.getBoundingClientRect();

    const elementX = rect.left + 60;
    const elementY = rect.top + 60;

    var offsetX = Math.min(Math.max(parseInt(((x - elementX) / elementX) * 45), -60), 60);
    var offsetY = Math.min(Math.max(parseInt(-((y - elementY) / elementY) * 45), -60), 60);

    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", offsetY + "deg");
}

function connectwise() {
    window.open('http://support.archnexus.com/', '_blank');
}

function barracuda() {
    window.open('https://ess.barracudanetworks.com/', '_blank');
}

function thycotic(){
    window.open('https://thycotic.archnexus.com/ss/', '_blank');
}

function wordpress(){
    window.open('http://nexus.archnexus.com/wp-admin/index.php', '_blank');
}

function microsoft(){
    window.open('https://admin.microsoft.com/Adminportal/Home#/homepage', '_blank');
}

function mural(){
    window.open('', '_blank');
}

function sketchup(){
    window.open('https://ecom-prd.trimblepaas.com/account/organization/1605558605548987/members', '_blank');
}

function goodsync(){
    window.open('https://jobs.goodsync.com/ui/dashboard', '_blank');
}

function zoom(){
    window.open('https://zoom.us/account', '_blank');
}

function canvas(){
    window.open('https://cvidportal.canvasgfx.com/product/membership-details/1', '_blank');
}

function citrix(){
    window.open('https://www.citrix.com/account/', '_blank');
}

function malwarebytes(){
    window.open('https://cloud.malwarebytes.com/auth/login', '_blank');
}

function vmware(){
    window.open('https://vcenter.archnexus.com/ui/', '_blank');
}

function duo(){
    window.open('https://admin-81fe44ab.duosecurity.com/', '_blank');
}

function autodesk(){
    window.open('https://manage.autodesk.com/home/', '_blank');
}

function bim360(){
    window.open('https://admin.b360.autodesk.com/admin/af39f38a-a13a-4038-9b6d-84ab7618d482/projects/', '_blank');
}

function clarity(){
    window.open('http://slcclarity1/CentralAdministrator/Server', '_blank');
}

function wfhdoc(){
    window.open('https://docs.google.com/spreadsheets/d/1NaLpn4t9cSRKYmHbvE1pZSj3Z4gus4ufaZrCb5bTsrM/edit#gid=0', '_blank');
}

function github(){
    window.open('https://github.com/ArchitecturalNexus/deploy-nexus-toolbar', '_blank');
}

function maps(){
    window.open('http://nexus.archnexus.com/office-maps/', '_blank');
}

function forms(){
    window.open('http://nexus.archnexus.com/standards/forms-templates/', '_blank');
}

function s2sac(){
    window.open('http://10.3.1.61/', '_blank');
}

function s2slc(){
    window.open('http://192.168.45.11/', '_blank');
}

function graywater(){
    window.open('http://bms.archnexus.com/login', '_blank');
}

function pelican(){
    window.open('https://arch-nexus.officeclimatecontrol.net/#_indexPage', '_blank');
}

function assets(){
    window.open('http://assets.archnexus.com/menu.php', '_blank');
}

function sharefile(){
    window.open('https://archnexus.sharefile.com/dashboard', '_blank');
}

function vantagepoint(){
    window.open('https://archnexus.deltekfirst.com/ArchNexus/app/', '_blank');
}

function nslookup(){
    window.open('https://www.nslookup.io/', '_blank');
}

function bluebeam(){
    window.open('https://org-admin.bluebeam.com', '_blank');
}

function knowbe4(){
    window.open('https://training.knowbe4.com/ui/login', '_blank');
}

function purpleair(){
    window.open('https://map.purpleair.com/1/mAQI/a10/p604800/cC0#14.07/40.72209/-111.81005', '_blank');
}

function virtualkeypad(){
    window.open('https://www.virtualkeypad.com', '_blank');
}

function emtrain(){
    window.open('https://archnexus2.ai.emtrain.com/todo/programs/1978/certificate', '_blank');
}

function hydrawise(){
    window.open('https://app.hydrawise.com/config/zones', '_blank');
}

function buildingevent(){
    window.open('https://docs.google.com/spreadsheets/d/1Mjfd522fVkulitWGC86crsnhWLwoWRvYrsukB7Ks0YI/edit#gid=0', '_blank');
}

function inhabit(){
    window.open('http://inhabit.archnexus.com/dashboard?site_code=inhabit', '_blank');
}

function viewglass(){
    window.open('https://view.com/account/signin', '_blank');
}

function twingate(){
    window.open('https://archnexus.twingate.com/', '_blank');
}

function webmail(){
    window.open('https://slc.archnexus.com/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fslc.archnexus.com%2fowa%2f', '_blank');
}

function entview(){
    window.open('https://evue.archnexus.com/#floorplan/%2Fgraphicalregion%2F13/view', '_blank');
}

function vendor(){
    window.open('https://docs.google.com/spreadsheets/d/1f0R3VQBxWiKgc5U9G0nskPcEZPaG5foE9siQADbGEeg/edit#gid=0', '_blank');
}

function github_personal(){
    window.open('https://github.com/Kassicus', '_blank');
}

function youtube(){
    window.open('https://www.youtube.com/', '_blank');
}

function gmail(){
    window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
}

function drive(){
    window.open('https://drive.google.com/drive/my-drive', '_blank');
}

function budget(){
    window.open('https://docs.google.com/spreadsheets/d/1o3ZtBkBT3KkgR6fRBuW1jwTqiD6vvYYTP__YiRgShIU/edit', '_blank');
}

function amazon(){
    window.open('https://www.amazon.com/', '_blank');
}

function allstate(){
    window.open('https://myaccountrwd.allstate.com/secured/home', '_blank');
}

function americafirst(){
    window.open('https://www.americafirst.com/', '_blank');
}

function chewy(){
    window.open('https://www.chewy.com/', '_blank');
}

function delta(){
    window.open('https://www.delta.com/', '_blank');
}

function facebook(){
    window.open('https://www.facebook.com/', '_blank');
}

function figma(){
    window.open('https://www.figma.com/', '_blank');
}

function godaddy(){
    window.open('https://www.godaddy.com/', '_blank');
}

function gusto(){
    window.open('https://gusto.com/', '_blank');
}

function hbomax(){
    window.open('https://www.hbomax.com/', '_blank');
}

function ifixit(){
    window.open('https://www.ifixit.com/', '_blank');
}

function intuit(){
    window.open('https://myturbotax.intuit.com/', '_blank');
}

function ksl(){
    window.open('https://www.ksl.com/', '_blank');
}

function linkedin(){
    window.open('https://www.linkedin.com/', '_blank');
}

function mountainamerica(){
    window.open('https://www.macu.com/', '_blank');
}

function mereo(){
    window.open('https://mereonetworks.zendesk.com/hc/en-us', '_blank');
}

function synchrony(){
    window.open('https://www.mysynchrony.com/', '_blank');
}

function nebula(){
    window.open('https://nebula.tv/', '_blank');
}

function nfl(){
    window.open('https://www.nfl.com/', '_blank');
}

function raiders(){
    window.open('https://www.raiders.com/', '_blank');
}

function nike(){
    window.open('https://www.nike.com/', '_blank');
}

function pluralsight(){
    window.open('https://www.pluralsight.com/', '_blank');
}

function principal(){
    window.open('https://www.principal.com/', '_blank');
}

function questar(){
    window.open('https://www.dominionenergy.com/', '_blank');
}

function cedar(){
    window.open('https://cedarbreaksapts.residentportal.com/auth', '_blank');
}

function rockymountain(){
    window.open('https://www.rockymountainpower.net/', '_blank');
}

function roku(){
    window.open('https://www.roku.com/', '_blank');
}

function robinhood(){
    window.open('https://robinhood.com/us/en/', '_blank');
}

function snapchat(){
    window.open('https://web.snapchat.com/', '_blank');
}

function steam(){
    window.open('https://store.steampowered.com/', '_blank');
}

function ticket(){
    window.open('https://www.ticketmaster.com/', '_blank');
}

function upgrade(){
    window.open('https://www.upgrade.com/', '_blank');
}

function w3schools(){
    window.open('https://www.w3schools.com/', '_blank');
}

function xfinity(){
    window.open('https://www.xfinity.com/overview', '_blank');
}

function hrblock(){
    window.open('https://account.hrblock.com/#/dashboard', '_blank');
}

function replit(){
    window.open('https://replit.com/~', '_blank');
}

function accuweather(){
    window.open('https://www.accuweather.com/', '_blank');
}

function habitica(){
    window.open('https://habitica.com/', '_blank');
}