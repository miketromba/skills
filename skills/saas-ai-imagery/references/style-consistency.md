# Style Consistency Guide for AI-Generated SaaS Brand Assets

The biggest failure mode with AI image generation is inconsistency. Without a system, every image looks like it was made by a different artist. This guide provides the framework to make all assets feel cohesive and intentionally branded.

---

## Why AI Images Look Random Without a System

AI models interpret each prompt independently. They have no memory of previous generations. Three root causes of inconsistency:

1. **No shared vocabulary**: "clean and modern" vs. "minimalist" vs. "contemporary" produces different results
2. **Missing parameters**: Unspecified lighting/color/style defaults are unpredictable
3. **No negative constraints**: Without exclusions, unwanted styles randomly appear

## The Brand Prompt Framework

### Step 1: Define Your Five Pillars

Document these once. Use them in every single prompt.

#### Pillar 1: Color Palette Direction

```
Brand Color Block:
"Color palette dominated by [primary: deep navy blue #1a2744],
[accent: warm coral #e8724a], and [neutral: soft warm gray #d4cfc9].
Avoid cool grays, neon colors, and saturated reds."
```

Build a specificity table:

| Element | Direction | Avoid |
|---|---|---|
| Primary | Deep navy blue, dominant in backgrounds | Bright blue, cyan, royal blue |
| Accent | Warm coral, sparingly for highlights | Red, orange, hot pink |
| Neutrals | Warm grays, off-whites | Cool grays, pure white, black |
| Overall tone | Warm, approachable, professional | Cold, clinical, overly vibrant |

#### Pillar 2: Lighting Standards

```
Brand Lighting Block:
"Soft natural window light from the upper left, creating gentle
shadows. Warm color temperature (slightly golden). No harsh direct
flash. No dramatic chiaroscuro. Even, professional lighting with
subtle depth."
```

Pick ONE style and use it for all assets:

| Style | Prompt Language | Brand Feel |
|---|---|---|
| Soft natural | `"Soft diffused natural light, warm color temperature"` | Approachable, authentic |
| Studio professional | `"Professional studio lighting, three-point setup"` | Corporate, authoritative |
| Golden hour | `"Golden hour sunlight, long warm shadows, backlit glow"` | Aspirational, premium |
| Flat even | `"Even flat lighting, minimal shadows, bright and clean"` | Modern, tech, minimalist |
| Dramatic | `"Strong directional light, deep shadows, high contrast"` | Bold, luxury |

#### Pillar 3: Composition Standards

```
Brand Composition Block:
"Medium shot, subject centered with slight rule-of-thirds offset.
Shallow depth of field with softly blurred background. Negative
space on the right for text overlay. Eye-level, straight-on
perspective. No extreme angles."
```

Document compositions for each use case:

| Use Case | Framing | Aspect Ratio |
|---|---|---|
| Hero section | Wide shot, subject left, text space right | 16:9 |
| Feature spot illustration | Center-weighted, tight | 1:1 |
| Blog header | Wide, centered focal point with breathing room | 2:1 or 16:9 |
| Social media | Center-weighted | 1:1 or 4:5 |
| Email header | Horizontal banner, centered | 3:1 |
| CTA banner | Dynamic flow toward CTA placement area | 3:1 or 4:1 |

#### Pillar 4: Artistic Style & Rendering

```
Brand Style Block:
"Clean 3D render with soft clay-morphic materials and subtle
glassmorphism effects. Smooth surfaces, soft ambient occlusion,
gentle drop shadows. Modern premium SaaS aesthetic. Not
photographic, not hand-drawn, not painterly."
```

Define 6-10 style adjectives for your brand: e.g., `clean, modern, premium, soft, luminous, geometric, minimal, refined, warm, approachable`.

#### Pillar 5: Negative Prompts & Exclusions

```
Brand Exclusion Block:
"No: cartoonish elements, neon colors, dark moody atmospheres,
lens flare, vignetting, HDR over-processing, text or watermarks,
cluttered backgrounds, anime style, low-poly, grunge textures,
vintage film grain, stock photo clichés."
```

Maintain a living list. Every time an unwanted element appears, add it.

---

### Step 2: Assemble the Master Template

```
=== [YOUR BRAND] AI IMAGE PROMPT FRAMEWORK ===

STYLE BASE:
"[Your Pillar 4 content]"

COLOR DIRECTION:
"[Your Pillar 1 content]"

LIGHTING:
"[Your Pillar 2 content]"

COMPOSITION:
"[Your Pillar 3 content]"

EXCLUSIONS:
"[Your Pillar 5 content]"

=== USAGE ===
[Subject Description] + [STYLE BASE] + [COLOR DIRECTION]
+ [LIGHTING] + [COMPOSITION]
Append [EXCLUSIONS] as negative prompt.
```

### Step 3: Generate by Swapping Only the Subject

| Image Need | Subject Swap | Everything Else |
|---|---|---|
| Homepage hero | "An abstract visualization of workflow automation" | Same style, color, lighting, composition |
| Feature card | "A shield icon representing data security" | Same style, color, lighting, composition |
| About page | "A modern creative workspace with warm natural light" | Same style, color, lighting, composition |
| Pricing section | "Three ascending premium 3D podiums" | Same style, color, lighting, composition |

---

## Midjourney-Specific Consistency Tools

### Style References (--sref)

The most powerful tool for visual consistency in Midjourney.

**Using an image as reference:**
```
[your prompt] --sref [URL of reference image] --sw 100
```

**Using style codes:**
```
[your prompt] --sref [10-digit code]
```

Best practices:
- Pick ONE sref code and use it across your entire project
- Browse styles at sref-midjourney.com or midlibrary.io
- Relevant categories for SaaS: Minimalist, Modern, Clean, Geometric, Abstract
- Use `--sref random` to discover codes, save the ones you like
- Start with `--sw 100` (default), increase to 300-500 for stronger style enforcement
- Avoid combining conflicting style descriptions in your text prompt with abstract sref codes

### Personalization Profiles (--p)

Create a dedicated profile for your brand:
1. Go to midjourney.com/personalize
2. Create a new profile (not your Global)
3. Select only images matching your desired SaaS brand aesthetic
4. Apply with `--p [profileID]` to every generation
5. Combine with `--stylize` (0-1000) to control how much personalization applies

### Consistent Parameters

Lock these across all prompts:
- `--ar [ratio]` — same aspect ratio per asset category
- `--stylize [value]` — same stylization level (100-250 for controlled output)
- `--style raw` — use when you want strict prompt adherence over Midjourney's defaults
- `--seed [number]` — same seed for reproducible starting points

---

## Multi-Model Consistency

If generating across different AI tools:

| Technique | Implementation |
|---|---|
| Brand style document | Write once, adapt prompt language per model |
| Reference image anchoring | Use the same reference images as inputs across tools |
| Post-processing pipeline | Apply the same color grading/LUT to all outputs |
| Style extraction | Feed your best outputs into an AI, ask it to describe the style, use that description |

### Post-Processing for Cohesion

Even with great prompts, apply a final unification pass:
1. **Color grading**: Apply the same LUT or color adjustment preset to every image
2. **Consistent export**: Same resolution, same compression, same color profile
3. **Overlay treatment**: Same subtle grain, same vignette intensity (or none)
4. **Border/padding**: Same whitespace treatment around all assets

---

## Common Consistency Mistakes

| Mistake | Fix |
|---|---|
| Being too vague on style | Replace `"professional"` with `"Canon EOS R5, 85mm f/1.4, slight warmth in color grading"` |
| Forgetting negatives | Always append your exclusion block, every single time |
| Letting individuals improvise | The framework is not optional; one "cinematic lighting" addition breaks cohesion |
| Not updating the guide | Review quarterly, update based on what generates best results |
| Overloading prompts | A focused 50-word prompt with precise style direction > 200-word prompt with conflicts |
| Mixing AI models without post-processing | Different models interpret the same prompt differently; unify with post-processing |

---

## Team Operationalization

| Method | Best For | How |
|---|---|---|
| Text expander shortcuts | Frequent generators | `/brand-style` expands to full style block |
| Shared Notion/Docs | Teams | Living document everyone references |
| Prompt cheat sheet | Onboarding | One-page quick reference |
| Template library in AI tool | Scale | Built into the generation workflow |

Best practices:
- Assign a "brand guardian" who reviews generated images weekly for drift
- Version your prompt guide with changelogs
- Include 3-5 reference images showing the ideal brand look
- Run a 30-min training showing before/after results with the framework
