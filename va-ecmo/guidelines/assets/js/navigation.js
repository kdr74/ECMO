// VA-ECMO Guidelines - Navigation Component
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('navigation-container');
    if (!navContainer) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navigationHTML = `
        <nav id="navigation">
            <h2>VA-ECMO Guidelines</h2>
            
            <div class="nav-section">
                <div class="nav-section-title">Main Sections</div>
                <ul>
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Contents</a></li>
                    <li><a href="section-1-indications.html" class="${currentPage === 'section-1-indications.html' ? 'active' : ''}">Section 1: Indications</a></li>
                    <li><a href="section-2-location.html" class="${currentPage === 'section-2-location.html' ? 'active' : ''}">Section 2: Location</a></li>
                    <li><a href="section-3-initiation.html" class="${currentPage === 'section-3-initiation.html' ? 'active' : ''}">Section 3: Initiation</a></li>
                    <li><a href="section-4-immediate-care.html" class="${currentPage === 'section-4-immediate-care.html' ? 'active' : ''}">Section 4: Immediate Care</a></li>
                    <li><a href="section-5-complications.html" class="${currentPage === 'section-5-complications.html' ? 'active' : ''}">Section 5: Complications</a></li>
                    <li><a href="section-6-weaning.html" class="${currentPage === 'section-6-weaning.html' ? 'active' : ''}">Section 6: Weaning</a></li>
                    <li><a href="section-7-post-cardiotomy.html" class="${currentPage === 'section-7-post-cardiotomy.html' ? 'active' : ''}">Section 7: Post-Cardiotomy</a></li>
                </ul>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Clinical Topics</div>
                <ul>
                    <li><a href="topics/lv-distention.html" class="${currentPage === 'lv-distention.html' ? 'active' : ''}">LV Distention & Pulsatility</a></li>
                    <li><a href="topics/harlequin-syndrome.html" class="${currentPage === 'harlequin-syndrome.html' ? 'active' : ''}">Harlequin Syndrome</a></li>
                    <li><a href="topics/distal-perfusion.html" class="${currentPage === 'distal-perfusion.html' ? 'active' : ''}">Distal Limb Perfusion</a></li>
                    <li><a href="topics/nirs-monitoring.html" class="${currentPage === 'nirs-monitoring.html' ? 'active' : ''}">NIRS Monitoring</a></li>
                    <li><a href="topics/initial-management.html" class="${currentPage === 'initial-management.html' ? 'active' : ''}">Initial Management</a></li>
                    <li><a href="topics/teg-interpretation.html" class="${currentPage === 'teg-interpretation.html' ? 'active' : ''}">TEG Interpretation</a></li>
                </ul>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Appendices</div>
                <ul>
                    <li><a href="appendices/scai-classification.html" class="${currentPage === 'scai-classification.html' ? 'active' : ''}">SCAI Classification</a></li>
                    <li><a href="appendices/ecpr-algorithm.html" class="${currentPage === 'ecpr-algorithm.html' ? 'active' : ''}">E-CPR Algorithm</a></li>
                    <li><a href="appendices/weaning-form.html" class="${currentPage === 'weaning-form.html' ? 'active' : ''}">Weaning Form</a></li>
                </ul>
            </div>
        </nav>
    `;

    navContainer.innerHTML = navigationHTML;
});
