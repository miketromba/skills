---
name: saas-ai-imagery
description: >-
  Generate AI image prompts for SaaS marketing websites with consistent branding.
  Covers prompt architecture, style consistency, placement strategy, and extensive
  examples for hero sections, features, pricing, and more. Use when creating AI-generated
  images, illustrations, or visual assets for a SaaS website, landing page, or marketing campaign.
---

# SaaS AI Imagery: Prompt Engineering for Marketing Websites

Generate cohesive, branded AI image assets for SaaS marketing websites using structured prompt engineering and style consistency techniques.

## The Master Prompt Architecture

Every production-quality AI image prompt follows this formula:

```
SUBJECT + ENVIRONMENT + COMPOSITION + LIGHTING + STYLE + CAMERA + QUALITY + NEGATIVES
```

### Simplified 4-Element Formula (Quick Start)

```
[Image Type] + [Subject] + [Background Setting] + [Style]
```

Example: `A product illustration of a dashboard interface floating in an abstract gradient space, clean minimal glassmorphism style with soft shadows`

### Why Structure Matters

- Text encoders process tokens sequentially; earlier words get more attention weight
- `"a red car in a forest"` produces different results than `"a forest with a red car"`
- Lead with image type and primary subject, then layer supporting details
- Specificity beats generic quality tags (`"pores visible on skin"` > `"highly detailed"`)

## Prompt Block System for Brand Consistency

Define reusable blocks that get prepended/appended to every prompt. This is the single most important technique for cohesive visual identity across all generated assets.

### 1. Style Base Block

```
STYLE BASE: "[Rendering style], [camera/quality descriptor]."
```

Choose ONE and use everywhere:
- **Photorealistic**: `"Professional DSLR photography, sharp detail, natural textures, realistic lighting"`
- **Editorial**: `"High-end magazine photography, styled compositions, intentional color grading"`
- **3D Rendered**: `"Clean 3D render, soft materials, studio-lit product visualization, clay-morphic"`
- **Illustrative**: `"Digital illustration, clean lines, flat color areas, vector-like quality"`
- **Abstract/Surreal**: `"Smooth glass-like surfaces, layered translucency, subtle refraction, digital sculpture"`

### 2. Color Direction Block

```
COLOR: "Color palette: [primary with hex], [secondary with hex], [neutrals].
Avoid [unwanted colors]."
```

Use descriptive language alongside hex codes since AI models respond to descriptions.

### 3. Lighting Block

```
LIGHTING: "[Type] from [direction], [color temp]. [Shadow quality].
No [unwanted lighting]."
```

| Lighting Style | Prompt Language | Brand Feel |
|---|---|---|
| Soft natural | `"Soft diffused natural light, warm color temperature"` | Approachable, warm |
| Studio professional | `"Professional studio lighting, three-point setup, clean shadows"` | Corporate, polished |
| Golden hour | `"Golden hour sunlight, long warm shadows, backlit glow"` | Aspirational, premium |
| Flat even | `"Even flat lighting, minimal shadows, bright and clean"` | Modern, tech, minimal |

### 4. Composition Block

```
COMPOSITION: "[Shot type], [subject placement], [depth of field],
[perspective]. [Negative space for text overlay]."
```

### 5. Negative/Exclusion Block

```
EXCLUSIONS: "No: [unwanted elements, styles, artifacts]."
```

Always include at minimum: `"No: cartoonish elements, text, watermarks, logos, cluttered backgrounds"`

### Assembly Order

```
[Subject Description] + [STYLE BASE] + [COLOR] + [LIGHTING] + [COMPOSITION] + [EXCLUSIONS]
```

The subject changes per image. Everything else stays constant. That is how you get consistency.

## Style Consistency Techniques

### Technique 1: Master Prompt Template

Create a reusable template with a `{SUBJECT}` variable:

```
"{SUBJECT}. [Your style base]. Color palette dominated by [your colors].
[Your lighting]. [Your composition]. No: [your exclusions]."
```

Swap only the subject for each new image. All other blocks remain identical.

### Technique 2: Midjourney Style References (--sref)

- Use `--sref [URL]` to apply the visual style of an existing image to new generations
- Use `--sref [code]` with 10-digit style codes from Midjourney's style library
- Use `--sw [0-1000]` to control style influence strength (default 100)
- Use `--sref random` to discover new styles, then reuse the generated code
- Stick to ONE sref code across all images in a campaign for consistency
- Combine with `--sv 7` (default) for latest style reference algorithm

### Technique 3: Personalization Profiles

Midjourney personalization (`--p`) applies learned aesthetic preferences. Create dedicated profiles for your brand by selecting images that match your desired look.

### Technique 4: Seed Locking

Use `--seed [number]` in Midjourney to get reproducible starting points. Same seed + similar prompt = more consistent outputs.

### Technique 5: Reference Image Extraction

1. Collect 3-5 reference images that nail your desired brand look
2. Feed them to an AI and ask it to extract/articulate the style definition
3. Use that extracted description as your permanent style base block

## Where to Place AI Images on a SaaS Website

See [placement-guide.md](references/placement-guide.md) for detailed placement strategies.

Quick reference:

| Section | Image Type | Purpose |
|---|---|---|
| Hero | Abstract 3D / surreal / metaphorical | Communicate value prop emotionally |
| Features | Spot illustrations (one per feature) | Clarify each feature's benefit |
| How It Works | Schematic/blueprint style | Show process flow visually |
| Social Proof | Lifestyle/editorial photos | Build trust and relatability |
| Pricing | Premium 3D / polished icons | Signal value, justify pricing |
| CTA sections | Character-driven / aspirational | Drive action with emotion |
| Blog headers | Thematic illustrations | Set context for content |

## Six SaaS Illustration Styles That Convert

| Style | Best Signal | Ideal Audience | Top Placement |
|---|---|---|---|
| Tactile Tech (vector + organic texture) | "Human and capable" | Fintech, Security, DevOps | Hero, About |
| Blueprint (monolinear, schematic) | "Precise and reliable" | Engineering, PM tools | How It Works, Features |
| Spot Illustrations (small, consistent) | "Organized and clear" | All SaaS products | Feature cards, Pricing |
| Abstract Surreal | "Innovative and seamless" | AI, Automation, Analytics | Hero background, Headers |
| High-Contrast 3D (clay-morphic, glossy) | "Premium and polished" | Enterprise, Design tools | Hero, Pricing |
| Character-Driven | "Approachable and memorable" | HR, Education, Community | Everywhere (system) |

## Additional Resources

- For 30+ ready-to-use prompt examples, see [prompt-examples.md](references/prompt-examples.md)
- For in-depth style consistency techniques, see [style-consistency.md](references/style-consistency.md)
- For detailed image placement strategy, see [placement-guide.md](references/placement-guide.md)

## Model-Specific Tips

**Midjourney**: Thrives on descriptive natural language + photographic terminology. Use `--ar`, `--stylize`, `--sref`, `--style raw` for control. Words at prompt start get most weight.

**DALL-E / GPT Image Gen**: Favors conversational, narrative descriptions. Best for exact text rendering and spatial composition. Fewer technical camera keywords needed.

**Flux**: Strong at photorealism and prompt adherence. Benefits from explicit camera/lens specifications and structured prompts.

**Stable Diffusion (SDXL/SD3)**: Requires strict syntax, strong negative prompts, and keyword weighting `(keyword:1.5)`. Pair with ControlNet for pose/depth control.

## Iteration Workflow

1. **Pass 1 (Core Idea)**: Test subject + environment with minimal detail
2. **Pass 2 (Composition)**: Add framing, angle, and spatial relationships
3. **Pass 3 (Lighting + Style)**: Layer in your brand's lighting and style blocks
4. **Pass 4 (Polish)**: Add camera specs, textures, negative prompts, parameters, run variations
