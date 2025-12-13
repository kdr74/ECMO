# Adding VA-ECMO Guideline to Your Existing Index.html

## 📝 What Changed

I've added the VA-ECMO Clinical Guideline link to your existing index page. Here's exactly what was added:

---

## 🎨 CSS Addition (Optional but Nice)

Add this to your existing `<style>` section (around line 45):

```css
/* NEW - Badge for guideline links */
.link-box.guideline {
    border-left: 5px solid #DA291C;
}
.link-box .subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
    font-weight: 400;
}
```

**What this does:**
- Adds a red stripe on the left of guideline boxes (NHS red color)
- Styles the subtitle text

---

## 🔗 HTML Addition (Required)

Add this new link box between your assessment tools and other tools:

```html
<!-- NEW - VA-ECMO CLINICAL GUIDELINE -->
<div class="link-box guideline">
    <a href="va-ecmo/">VA-ECMO Clinical Guideline</a>
    <div class="subtitle">Comprehensive guideline v1.8 (2024-2026)</div>
</div>
```

**Where to put it:**
Insert it after the VA-ECMO Assessment link and before PEEP Study.

---

## 📋 Your Updated Structure Will Look Like:

```
Bristol SARF & ECMO Service
├── VV-ECMO Assessment
├── VA-ECMO Assessment
├── VA-ECMO Clinical Guideline ← NEW! (with red stripe)
├── PEEP Study
└── Retrieval Record
```

---

## 🚀 Quick Copy-Paste Instructions

### **Option 1: Replace Entire File (Easiest)**

1. Go to https://github.com/kdr74/ECMO
2. Click on `index.html`
3. Click the **pencil icon** (Edit this file)
4. **Select all** (Ctrl+A / Cmd+A)
5. **Delete** everything
6. **Paste** the complete updated index.html I provided
7. Click **"Commit changes"**

### **Option 2: Manual Addition (If You Prefer)**

1. Open your current index.html for editing
2. Find this section:
```html
<div class="link-box">
    <a href="VA_ECMO_Interactive_Assessment_v4_23_1.html">VA-ECMO Assessment</a>
</div>
```

3. After it, add:
```html
<!-- NEW - VA-ECMO CLINICAL GUIDELINE -->
<div class="link-box guideline">
    <a href="va-ecmo/">VA-ECMO Clinical Guideline</a>
    <div class="subtitle">Comprehensive guideline v1.8 (2024-2026)</div>
</div>
```

4. In the `<style>` section, before the closing `</style>`, add:
```css
.link-box.guideline {
    border-left: 5px solid #DA291C;
}
.link-box .subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
    font-weight: 400;
}
```

5. Save and commit!

---

## 📁 Your Final GitHub Structure

```
ECMO/
├── index.html                                    ← Updated with new link
├── VV-ECMO-Assessment-Final_v2.1.html
├── VA_ECMO_Interactive_Assessment_v4_23_1.html
├── PEEP_Study.html
├── ecmo_cannulation_form_v2.7.html
└── va-ecmo/                                      ← NEW FOLDER
    ├── index.html                                ← The guideline
    ├── README.md
    └── images/                                    ← 16 images
        ├── figure-01-risk-stratification-matrix.png
        ├── figure-02-rapid-stop-criteria.png
        └── ... (14 more images)
```

---

## 🌐 URLs After Deployment

**Main page:**  
https://kdr74.github.io/ECMO/

**VV-ECMO Assessment:**  
https://kdr74.github.io/ECMO/VV-ECMO-Assessment-Final_v2.1.html

**VA-ECMO Assessment:**  
https://kdr74.github.io/ECMO/VA_ECMO_Interactive_Assessment_v4_23_1.html

**VA-ECMO Clinical Guideline (NEW!):**  
https://kdr74.github.io/ECMO/va-ecmo/

**PEEP Study:**  
https://kdr74.github.io/ECMO/PEEP_Study.html

**Retrieval Record:**  
https://kdr74.github.io/ECMO/ecmo_cannulation_form_v2.7.html

---

## ✅ What Users Will See

When they visit https://kdr74.github.io/ECMO/, they'll see:

1. VV-ECMO Assessment
2. VA-ECMO Assessment
3. **VA-ECMO Clinical Guideline** ← NEW! (with red stripe and subtitle)
4. PEEP Study
5. Retrieval Record

Clicking "VA-ECMO Clinical Guideline" takes them to the full interactive guideline!

---

## 🎯 Next Steps

1. **Upload the updated index.html** to your GitHub repo (replaces current one)
2. **Upload the va-ecmo folder** (with guideline and images)
3. **Test the link** - visit https://kdr74.github.io/ECMO/
4. **Click the new link** - should open the guideline!

---

## 💡 Pro Tip: Group by Type (Optional)

If you want to organize better, you could add section headers:

```html
<div class="container">
    <h2 style="color: #10698b; font-size: 1.1rem; margin-bottom: -1rem;">Assessment Tools</h2>
    <div class="link-box">
        <a href="VV-ECMO-Assessment-Final_v2.1.html">VV-ECMO Assessment</a>
    </div>
    <div class="link-box">
        <a href="VA_ECMO_Interactive_Assessment_v4_23_1.html">VA-ECMO Assessment</a>
    </div>
    
    <h2 style="color: #10698b; font-size: 1.1rem; margin-bottom: -1rem;">Clinical Guidelines</h2>
    <div class="link-box guideline">
        <a href="va-ecmo/">VA-ECMO Clinical Guideline</a>
        <div class="subtitle">Comprehensive guideline v1.8 (2024-2026)</div>
    </div>
    
    <h2 style="color: #10698b; font-size: 1.1rem; margin-bottom: -1rem;">Other Tools</h2>
    <div class="link-box">
        <a href="PEEP_Study.html">PEEP Study</a>
    </div>
    <div class="link-box">
        <a href="ecmo_cannulation_form_v2.7.html">Retrieval Record</a>
    </div>
</div>
```

This groups them into logical categories!

---

Need help with any step? Let me know!
